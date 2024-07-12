// import './footer.css'
// import "../../assets/bootstrap.css";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// const Footer = () => {
//   return (
//     <div className="footerOuterContainer">
//       <div className=" container">
//         <div className="row">
//           {/* colomn one */}
//           <div className="col-md-3 col-sm-6 footerIcons">
//             <FacebookIcon />
//             <InstagramIcon />
//             <YouTubeIcon />
//             <ul className="footer-list">
//               <li>Audio Description</li>
//               <li>Investor Relations</li>
//               <li>Legal Notice</li>
//             </ul>
//           </div>
//           {/* colomn three */}
//           <div className="col-md-3 col-sm-6 footerIcons">
//             <ul className="footer-list">
//               <li>Help Center</li>
//               <li>Jobs</li>
//               <li>Cookie Preferencess</li>
//             </ul>
//           </div>
//           {/* colomn four */}
//           <div className="col-md-3 col-sm-6 footerIcons">
//             <ul className="footer-list">
//               <li>Gift Cards</li>
//               <li>Terms of Users</li>
//               <li>Corporate Informations</li>
//             </ul>
//           </div>
//           {/* colomm five */}
//           <div className="col-md-3 col-sm-6 footerIcons">
//             <ul className="footer-list">
//               <li>Media Center</li>
//               <li>Privacy</li>
//               <li>Contact Use</li>
//             </ul>
//           </div>
//         </div>

//         <div className="footerBottom text-xs-center">
//           &copy;1997-2024 Netflix, Inc
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer













import "./footer.css";
import "../../assets/bootstrap.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footerOuterContainer">
      <div className="container">
        <div className="row">
          {/* column one */}
          <div className="col-md-3 col-sm-6" >
            <div className="d-flex flex-column align-items-start ">
              <div className="d-flex mb-3 ">
                <FacebookIcon className="mx-3 text-white" />
                <InstagramIcon className="text-white" />
                <YouTubeIcon className=" mx-3 text-white" />
              </div>
              <ul className="footer-list mb-0 ">
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
          </div>
          {/* column three */}
          <div className="col-md-3 col-sm-6">
            <ul className="footer-list mb-3">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferencess</li>
            </ul>
          </div>
          {/* column four */}
          <div className="col-md-3 col-sm-6">
            <ul className="footer-list mb-0">
              <li>Gift Cards</li>
              <li>Terms of Users</li>
              <li>Corporate Informations</li>
            </ul>
          </div>
          {/* column five */}
          <div className="col-md-3 col-sm-6">
            <ul className="footer-list mb-0 ">
              <li className="">Media Center</li>
              <li>Privacy</li>
              <li>Contact Use</li>
            </ul>
          </div>
        </div>
      
  <div className="service-code footerBottom">
          <p className=" small">Service Code</p>
        </div>
        <div className=" ">&copy;1997-2024 Netflix, Inc</div>
      </div>
    </div>
  );
};

export default Footer;












