import React from "react";
// import react icons for social media portion of footer
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Container, Row, Col, ListGroup } from "react-bootstrap/";

// Example Footer

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/",
  },

  {
    id: 2,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/",
  },
  // {
  //   id: 3,
  //   icon: <FiSubstack />,
  //   url: "https://www.youtube.com/c/",
  // },
];

function Footer() {
  return (
    <Container className="mt-5 pt-5 border-top">
      <Row className="justify-content-center text-center mb-5">
        <Col>
          <p className="h3 mb-4">Follow me</p>
          <ListGroup horizontal className="justify-content-center">
            {socialLinks.map((link) => (
              <ListGroup.Item
                key={link.id}
                className="border-0 bg-transparent p-0"
              >
                <a
                  href={link.url}
                  target="__blank"
                  className="text-secondary hover-text-primary"
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "#f8f9fa",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <i className={`h4 ${link.icon}`}></i>
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
    // <div className="text-center">
    //   <p className="text-sm">
    //     &copy; {new Date().getFullYear()} Joseph Ruff. All rights reserved.
    //   </p>
    // </div>
  );
}

// const Footer = () => {
//   return (
//     <div className="container mx-auto">
//       <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
//         {/* Footer social links */}
//         <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
//           <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
//             Follow me
//           </p>
//           <ul className="flex gap-4 sm:gap-8">
//             {socialLinks.map((link) => (
//               <a
//                 href={link.url}
//                 target="__blank"
//                 key={link.id}
//                 className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
//               >
//                 <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
//               </a>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

export default Footer;
