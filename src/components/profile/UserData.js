import coverImg from "../../assets/images/users/CoverImg.png";
import user2 from "../../assets/images/users/user2.png";
import proj1 from '../../assets/images/project1.png';
import proj2 from '../../assets/images/project2.png';
import proj3 from '../../assets/images/project3.png';

export const currentUser = {
  userImg: user2,
  coverImg: coverImg,
  userName: "Username",
  userType: "",
  userTitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa.",
  userDesc:
    "Curabitur rutrum, diam id consequat consequat, nibh odio venenatis sapien, a porta arcu orci a diam. Quisque et est interdum, accumsan purus vitae, cursus nisl.venenatis sapien, a porta arcu orci a diam. Quisque et est interdum, accumsan purus vitae, cursus nisl",
  connections: 1043,
};
export const projects = [
    {
      id: 1,
      projecTitle: "Lorem ipsum dolor sit",
      projectType: "UX/UI design",
      projectDate: "02.09.2022",
      projectDesc: "Description of the project goes here",
      projectImage: proj1
    },
    {
      id: 2,
      projecTitle: "Lorem ipsum dolor sit",
      projectType: "Graphic design",
      projectDate: "06.12.2022",
      projectDesc: "Description of the project goes here",
      projectImage: proj2
    },
    {
      id: 3,
      projecTitle: "Lorem ipsum dolor sit",
      projectType: "Graphic design",
      projectDate: "14.11.2022",
      projectDesc: "Description of the project goes here",
      projectImage: proj3
    },
    {
      id: 4,
      projecTitle: "Another Project",
      projectType: "Web Development",
      projectDate: "22.10.2022",
      projectDesc: "Description of the project goes here",
      projectImage: proj3
    },
];

export const skills = [
    { id: 1, title: "Frontend WEB DEV", score: 4 },
    { id: 2, title: "BACKEND", score: 6 },
    { id: 3, title: "okokokokok", score: 3 },
    { id: 4, title: "UX Design", score: 5 },
    { id: 5, title: "Mobile Development", score: 7 },
  ];

export const exps = [
  {
    title: "Freelance UX/UI designer",
    start: "Jun 2022",
    end: "Present",
    time: "1 yrs 02 mos",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat",
    company: "Valsco",
    type: "Lorem ipsum",
  },
  {
    title: "Freelance UX/UI designer",
    start: "Jun 2022",
    end: "Present",
    time: "1 yrs 02 mos",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat",
    company: "Valsco",
    type: "Lorem ipsum",
  },
  {
    title: "Freelance UX/UI designer",
    start: "Jun 2022",
    end: "Present",
    time: "1 yrs 02 mos",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat",
    company: "Valsco",
    type: "Lorem ipsum",
  },
];
