import { useContext, useState, useEffect } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";
import { 
  doc, 
  updateDoc, 
  arrayUnion, 
  arrayRemove, 
  getDoc, 
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import { db } from "../../firebase/config";

// Import the CommentItem component
import CommentItem from "./CommentItem";

function formatDateTime(timestamp, comment) {
  try {
    // Handle Firebase Timestamp objects
    if (timestamp && typeof timestamp.toDate === 'function') {
      timestamp = timestamp.toDate();
    }
    
    // Handle string timestamps
    const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
    
    let options;
    if (comment) {
      options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
    } else {
      options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
    }
    return date.toLocaleDateString("en-US", options);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
}

const Post = ({
  username,
  avatar,
  images,
  likes = [],
  postText,
  uploadedTime,
  link,
  postId,
  likesCount = 0,
  comments = 0,
}) => {
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const [postComments, setPostComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likeCount, setLikesCount] = useState(likesCount);
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid || null;
  const [liked, setLiked] = useState(userId ? likes.includes(userId) : false);
  const [isLoading, setIsLoading] = useState(false);

  // Debug logging to identify the issue
  useEffect(() => {
    console.log("Current User:", currentUser);
    console.log("UserId:", userId);
    console.log("PostId:", postId);
  }, [currentUser, userId, postId]);

  useEffect(() => {
    setLikesCount(likesCount);
    // Only check includes if userId is not null
    setLiked(userId ? likes.includes(userId) : false);
  }, [likesCount, likes, userId]);

  const handleLike = async () => {
    // Check if user is logged in and show a message
    if (!currentUser) {
      alert("Please log in to like posts");
      return;
    }
    
    // Check if postId exists
    if (!postId) {
      console.error("Post ID is missing");
      return;
    }

    // Check if userId is valid
    if (!userId) {
      console.error("User ID is missing");
      return;
    }

    setIsLoading(true);
    try {
      const postRef = doc(db, "posts", postId);
      
      // First check if the post exists
      const postDoc = await getDoc(postRef);
      if (!postDoc.exists()) {
        console.error("Post does not exist");
        return;
      }

      // Check if the user already liked this post
      const currentLikes = postDoc.data().likes || [];
      const userLiked = currentLikes.includes(userId);

      if (userLiked) {
        // Unlike
        await updateDoc(postRef, {
          likes: arrayRemove(userId)
        });
        setLiked(false);
        setLikesCount(prev => Math.max(0, prev - 1));
      } else {
        // Like
        await updateDoc(postRef, {
          likes: arrayUnion(userId)
        });
        setLiked(true);
        setLikesCount(prev => prev + 1);
      }
    } catch (error) {
      console.error("Error updating like status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewComments = async () => {
    if (!postId) {
      console.error("Cannot view comments: Post ID is missing");
      return;
    }
    
    setIsLoading(true);
    try {
      const commentsRef = collection(db, "posts", postId, "comments");
      const commentsQuery = query(commentsRef, orderBy("commentTime", "desc"));
      
      const querySnapshot = await getDocs(commentsQuery);
      const commentsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setPostComments(commentsData);
      setCommentsLoaded(true);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendComment = async () => {
    if (!currentUser) {
      alert("Please log in to comment");
      return;
    }
    
    if (!postId) {
      console.error("Cannot comment: Post ID is missing");
      return;
    }
    
    if (newComment.trim() === "") {
      alert("Please enter a comment");
      return;
    }

    setIsLoading(true);
    try {
      const commentsRef = collection(db, "posts", postId, "comments");
      
      const commentData = {
        username: currentUser?.displayName || "Anonymous User",
        userId: userId,
        comment: newComment,
        commentTime: serverTimestamp()
      };

      // Add to Firestore
      await addDoc(commentsRef, commentData);
      
      // Update comment count on the post
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        commentsCount: (comments || 0) + 1
      });

      // Clear comment field and refresh comments
      setNewComment("");
      handleViewComments();
    } catch (error) {
      console.error("Error sending comment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-backgroundColor-lightgray p-4 mb-4 rounded-2xl shadow-xl">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img
            src={avatar || "/default-avatar.jpg"}
            alt={`${username}'s avatar`}
            className="w-10 h-10 rounded-full border-2 border-black object-cover mr-3"
          />
          <div>
            <p className="text-gray-800 font-bold text-sm md:text-base">
              {username || "Anonymous"}
            </p>
            <p className="text-gray-600 text-xs md:text-base max-w-20 md:max-w-full">
              Posted on {formatDateTime(uploadedTime)}
            </p>
          </div>
        </div>
        <button className="bg-backgroundColor-gray py-0 px-2 md:px-3 rounded-2xl text-xs md:text-base text-backgroundColor-followBtn">
          + Follow
        </button>
      </div>

      {/* Post Text */}
      <div className="my-4">{postText}</div>

      {/* Post Link */}
      {link && (
        <div className="my-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {link}
          </a>
        </div>
      )}

      {/* Post Images */}
      <div className="mb-4">
        {images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Post ${index + 1}`}
            className="w-full h-64 object-cover mb-2 rounded"
          />
        ))}
      </div>

      {/* Post Actions (Likes and Comments) */}
      <div>
        <div className="flex items-center w-full justify-between space-x-4">
          <p
            className="pl-5 flex items-center gap-1 cursor-pointer"
            onClick={handleLike}
            disabled={isLoading}
          >
            {liked ? (
              <FaThumbsUp className="text-backgroundColor-commentblue" />
            ) : (
              <FaRegThumbsUp className="text-backgroundColor-commentblue" />
            )}
            {likeCount}
          </p>
          <p className="pr-2">
            <FiSend className="text-xl" />
          </p>
        </div>
        <div>
          <div className="flex items-center pr-6 pl-2 py-2 mx-auto">
            <img
              src={currentUser?.photoURL || "/Images/profile.jpg"}
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-black"
            />
            <input
              type="text"
              className="md:p-2 p-1 rounded-3xl md:w-full text-xs md:text-base w-11/12 font-semibold placeholder:text-black bg-backgroundColor-gray"
              placeholder={currentUser ? "Add a comment..." : "Log in to comment"}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              disabled={!currentUser}
            />
            <button
              onClick={handleSendComment}
              disabled={isLoading || !newComment.trim() || !currentUser}
              className={`ml-2 p-1 md:p-2 bg-backgroundColor-gray rounded-3xl text-xs md:text-base font-semibold ${
                currentUser && newComment.trim() 
                  ? "text-backgroundColor-commentblue" 
                  : "text-gray-400"
              }`}
            >
              Send
            </button>
          </div>
          {commentsLoaded ? (
            <div className="pl-2">
              {postComments.length > 0 ? (
                postComments.map((comment) => (
                  <CommentItem
                    key={comment.id}
                    username={comment.username}
                    content={comment.comment}
                    timestamp={comment.commentTime}
                  />
                ))
              ) : (
                <p>No comments yet</p>
              )}
            </div>
          ) : (
            <p
              className="text-backgroundColor-commentblue pl-2 cursor-pointer"
              onClick={handleViewComments}
            >
              View All comments
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;