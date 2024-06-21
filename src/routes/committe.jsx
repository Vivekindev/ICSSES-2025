import React from 'react';
import "../css/committe.css";
import Navabar from '../components/navbar/navabar'
import ceo from "../assets/images/ceo.jpg";
import president from "../assets/images/president.jpg";
import founder from "../assets/images/founder.jpg";
import principal from "../assets/images/principal.jpg";
import director from "../assets/images/director.gif";
import secretary from "../assets/images/TKN.jpg"
import {MdOutlineCopyright} from "react-icons/md"

export default function committe() {
  return (
    <section className='committe-page-main-container'>
        <div className="committe-page-hero-container">
            <Navabar/>
            <div className="committe-page-heading-container">
                <div className="patrons-container">
                    <h1 className="main-heading">With the divine blessings of our Founder President</h1>
                    <div className="patron-cards-container">
                        <div className="main-patron-card">
                            <img className='main-patron-image' src={founder} alt="founder"/>
                            <h2 className="main-patron-name">Sree Sree Sree Dr. Shivakumara Swamigalu</h2>
                            <h3 className="main-patron-designation">Founder President</h3>
                            <h5 className="main-patron-institute">Sree Siddaganga Education Society, Siddaganga Math, Tumakuru</h5>
                        </div>
                    </div>
                    <h1 className="main-heading">Chief Patron</h1>
                    <div className="patron-cards-container">
                        <div className="main-patron-card">
                            <img className='main-patron-image' src={president} alt="president"/>
                            <h2 className="main-patron-name">Sree Siddalinga Swamiji</h2>
                            <h3 className="main-patron-designation">President</h3>
                            <h5 className="main-patron-institute">Sree Siddaganga Education Society, Siddaganga Math, Tumakuru</h5>
                        </div>
                    </div>
                    <h1 className="main-heading">Patrons</h1>
                    <div className='patron-cards-container'>
                        {/* <div className="main-patron-card">
                            <img className='main-patron-image' src={vice_president} alt="vicepresident"/>
                            <h2 className="main-patron-name">Sree Shiva Siddeshwara Swamiji</h2>
                            <h3 className="main-patron-designation">Vice President</h3>
                            <h5 className="main-patron-institute">Sree Siddaganga Education Society Siddaganga Math, Tumakuru</h5>
                        </div> */}
                        <div className="main-patron-card">
                            <img className='main-patron-image' src={secretary} alt="secretary"/>
                            <h2 className="main-patron-name">Shri T. K. Nanjundappa </h2>
                            <h3 className="main-patron-designation">Honorary Secretary</h3>
                            <h5 className="main-patron-institute">Sree Siddaganga Education Society, Siddaganga Math, Tumakuru</h5>
                        </div>
                        <div className="main-patron-card">
                            <img className='main-patron-image' src={ceo} alt="ceo"/>
                            <h2 className="main-patron-name">Dr. Shivakumaraiah</h2>
                            <h3 className="main-patron-designation">Joint Secretary</h3>
                            {/* <h5 className="main-patron-institute">Siddaganga Math, Tumakuru</h5> */}
                            <h5 className="main-patron-institute">Sree Siddaganga Education Society, Siddaganga Math, Tumakuru</h5>
                        </div>
                        <div className="main-patron-card">
                            <img className='main-patron-image' src={director} alt="director"/>
                            <h2 className="main-patron-name">Dr. M. N. Channabasappa</h2>
                            <h3 className="main-patron-designation">Director</h3>
                            <h5 className="main-patron-institute">SIT, Tumakuru</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="patrons-container">
            <h1 className="patrons-heading">General Chair</h1>
            <div className="patron-cards-container">
                <div className="main-patron-card">
                    <img className='main-patron-image' src={principal} alt="principal"/>
                    <h2 className="main-patron-name">Dr. S. V. Dinesh</h2>
                    <h3 className="main-patron-designation">Principal</h3>
                    <h5 className="main-patron-institute">SIT, Tumakuru</h5>
                </div>
            </div>
        </div>


        <div className="patrons-container">
            <h1 className="patrons-heading">Organizing Committee</h1>
            <div className="committe-container">
                <div className='left-alignment-style'>
                    <div className='inside-left-alignment'>
                    <h3 className="committe-details">Dr. Rashmi, Professor and Head, Dept. of EEE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. H. K. E. Latha, Professor and Head, Dept. of EIE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. H. M. Kalpana, Professor  Dept. of EIE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. K. V. Suresh, Professor and Head, Dept. of  ECE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. K. Viswanath, Professor and Head, Dept. of  ETE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. R. Kumaraswamy, Professor, Dept. of ECE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. K. C. Narasimhamurthy, Professor, Dept. of ETE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. Siddeswara Prasad V., Professor, Dept. of EIE, SIT, Tumakuru</h3>
                    </div>
                </div>
            </div>
        </div>

        
 

        <div className="patrons-container">
            <h1 className="patrons-heading">Advisory Committee</h1>
            <div className="committe-container">
                
            <div className='left-alignment-style'>
                    <div className='inside-left-alignment'>
                 {/* <h3 className="committe-details">Dr. Deepa Shenoy, IEEE Chair Bengaluru Section</h3>  */}
                <h3 className="committe-details">Dr. Michael G. Danikas, Democritus University of Thrace, Xanthi</h3>
                <h3 className="committe-details">Dr. Raji Sundarajan, Purdue University, West Lafayette</h3>
                <h3 className="committe-details">Dr. Suresh Jangamashetty, Vice Chancellor, Haveri University, Haveri</h3>
                <h3 className="committe-details">Dr. S. R. Mahadeva Prasanna, IIT Dharwad</h3>
                <h3 className="committe-details">Dr. Arun Mahendrakar, IIT Madras</h3>
                <h3 className="committe-details">Dr. T. Sreenivas, IISc Bengaluru</h3>
                <h3 className="committe-details">Dr. Shyam Vasudevarao, Renalyx, Bengaluru</h3>
                <h3 className="committe-details">Dr. Nirmalya Ghosh Discovary Institute, La Jolla, CA, USA </h3>
                <h3 className="committe-details">Dr. R. C. Saritha, Associate Director, Bengaluru</h3>
                <h3 className="committe-details">Dr. A. Uday Kumar, NAL, Bengaluru</h3>
                <h3 className="committe-details">Dr. Anandhi Giridharan, IISC, Bangalore</h3>
                <h3 className="committe-details">Dr. K. Sivakumar, IIT, Hyderabad</h3>
                <h3 className="committe-details">Dr. Vittal Prabhu, Penn State University, USA</h3>
                <h3 className="committe-details">Dr. Mohan Kolhe, University of Agder, Norway</h3>
                </div>
                </div>
            </div>
        </div>

        <div className="patrons-container">
            <h1 className="patrons-heading">""</h1>
            <div className="patron-cards-container">
            <div className="patron-card">
                    <h2 className="patron-name">Dr. Rashmi </h2>
                    <h3 className="patron-designation">Professor and Head, Dept. of EEE, SIT, Tumakuru</h3>
                    <h5 className="patron-institute">Organizing Chair</h5>
                </div>
                </div>
            <div className="patron-cards-container">
            <div className="patron-card">
                    <h2 className="patron-name">Dr. Vinayaka K. U.</h2>
                    <h3 className="patron-designation">Assistant Professor, Dept. of EEE, SIT, Tumakuru</h3>
                    <h5 className="patron-institute">Technical Chair</h5>
                </div>
            <div className="patron-card">
                    <h2 className="patron-name">Dr. Vijayalakshmi K.</h2>
                    <h3 className="patron-designation">IEEE Execom Member,Bengaluru Section</h3>
                    <h5 className="patron-institute">Technical Co-Chair</h5>
                </div>
                <div className="patron-card">
                    <h2 className="patron-name">Dr. Madhu B. M.</h2>
                    <h3 className="patron-designation">Assistant Professor, Dept. of EEE, SIT, Tumakuru </h3>
                    <h5 className="patron-institute">Publication Chair</h5>
                </div>

                <div className="patron-card">
                    {/* need to be edited */}
                    <h2 className="patron-name">Mr. Gajendra Deshpande</h2>
                    <h3 className="patron-designation">IEEE Execom Member,Bengaluru Section</h3>
                    <h5 className="patron-institute">Publication Co-Chair</h5>
                </div>
                <div className="patron-card">
                {/* Dr. Mallikarjun B C */}
                {/* Associate Professor, Dept. of ETE,  */}
                    <h2 className="patron-name">Prof. Sridhara B. A.</h2>
                    <h3 className="patron-designation"> Associate Professor, Dept. of EEE, SIT, Tumakuru</h3>
                    <h5 className="patron-institute">Finance Chair</h5>
                </div>


                <div className="patron-card">
                    <h2 className="patron-name">Prof. Naveen Kumar S. B.</h2>
                    <h3 className="patron-designation">Assistant Professor, Dept. of EEE, SIT, Tumakuru </h3>
                    <h5 className="patron-institute">Finance Co-Chair</h5>
                </div>


                <div className="patron-card">
                    <h2 className="patron-name">Dr. Sridhar H. S.</h2>
                    <h3 className="patron-designation">Assistant Professor, Dept. of EEE, SIT, Tumakuru </h3>
                    <h5 className="patron-institute">Publicity  Chair</h5>
                </div>

                {/* <div className="patron-card">
                    <h2 className="patron-name">Dr. K Viswanath</h2>
                    <h3 className="patron-designation">Professor, Dept. of ETE, SIT, Tumakuru</h3>
                    <h5 className="patron-institute">Publicity Chair</h5>
                </div> */}

            </div>
        </div>
{/*
        <div className="patrons-container">
            <h1 className="patrons-heading">Organizing Committee</h1>
            <div className="committe-container">
                <div className='left-alignment-style'>
                    <div className='inside-left-alignment'>
                    <h3 className="committe-details">Dr. Rashmi, Professor and Head, Dept. of EEE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. H. K. E. Latha, Professor and Head, Dept. of EIE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. H. M. Kalpana, Professor  Dept. of EIE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. K. V. Suresh, Professor and Head, Dept. of  ECE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. K. Viswanath, Professor and Head, Dept. of  ETE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. R. Kumaraswamy, Professor, Dept. of ECE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. K. C. Narasimhamurthy, Professor, Dept. of ETE, SIT, Tumakuru</h3>
                    <h3 className="committe-details">Dr. Siddeswara Prasad V., Professor, Dept. of EIE, SIT, Tumakuru</h3>
                    
                    </div>
                </div>
            </div>
        </div>
*/}
        <div className="patrons-container">
            <h1 className="patrons-heading">Technical Program Committee</h1>
            <div className="committe-container">
                
            <div className='left-alignment-style'>
                    <div className='inside-left-alignment'>
                    <h3 className="committe-details"> Dr. Veena T., NIT Goa</h3>
                    <h3 className="committe-details"> Dr. K. Jaya Sankar, MCET, Hyderabad </h3>
                    <h3 className="committe-details"> Dr. RudraSwamy S. B., SJCE, Mysuru </h3>
                    <h3 className="committe-details"> Dr. Sundara Rajan, CPRI, Bengaluru </h3>
                    <h3 className="committe-details"> Dr. Shobha Shankar, VVCE, Mysuru </h3>
                    <h3 className="committe-details"> Dr. Jayadevappa D., JSSATE, Bengaluru </h3>
                    <h3 className="committe-details"> Dr. R. S. Geetha, BMSCE, Bengaluru </h3>
                    <h3 className="committe-details"> Dr. Poornima B., BIET, Davanagere </h3>
                    <h3 className="committe-details"> Dr. Nagesh Prabhu, Director (Curriculum Development) at<br></br> Nitte University Mangalore </h3>
                    <h3 className="committe-details"> Dr. M. S. Suma, BMSCE, Bengaluru </h3>
                    <h3 className="committe-details"> Dr. Dattatraya Narayan Gaonkar, NITK, Surathkal </h3>
                    <h3 className="committe-details"> Dr. Sriram, MSRIT, Bengaluru </h3>
                    <h3 className="committe-details"> Dr. Shyam Lal, NITK, Surathkal, Mangalore </h3>
                    <h3 className="committe-details"> Dr. Amaresh P. Kandagal, Toshiba (India) Pvt. Ltd. </h3>
                    <h3 className="committe-details"> Dr. Prasanna Kumar, RVCE, Bengaluru </h3>
                    <h3 className="committe-details"> Mr. Sudheer T, TMEIC, Tumkur </h3>
                    <br></br>
                    <br></br>
                {/* <h3 className="committe-details">Mr. Raghavendra Prasad, IEEE Execom Member Bengaluru Section</h3>
                <h3 className="committe-details">Mr. Ravi Hosamani,  IEEE Execom Member Bengaluru Section</h3>
                <h3 className="committe-details">Dr. Dileep A D, IIT Mandi</h3>
                <h3 className="committe-details">Dr. Veena T, NIT Goa</h3>
                <h3 className="committe-details">Dr. Deepak K T, IIIT Dharwad</h3>
                <h3 className="committe-details">Dr. Narendra N P, Samsung, Bengaluru</h3>
                <h3 className="committe-details">Dr. Guruprasad, Audience, Bengaluru</h3>
                <h3 className="committe-details">Dr. Anil Kumar Vuppala, IIIT Hyderabad</h3>
                <h3 className="committe-details">Mr. Dayanand Kumar N C, Samsung</h3>
                <h3 className="committe-details">Dr. Arnav Bhavsar Vinayak, IIT Mandi</h3>
                <h3 className="committe-details">Dr. Rajiv Ranjan Sahay, IIT Kharagpur </h3>
                <h3 className="committe-details">Mr. Indranil Sarkar, Fish and Richardson P. C., Boston, USA</h3>
                <h3 className="committe-details">Dr. Deepak Dasalukunte, Intel, USA</h3>
                <h3 className="committe-details">Dr. Shreyas K V, Apple Inc. USA</h3>
                <h3 className="committe-details">Dr. Lakshminidhi T, NITK, Suratkal</h3>
                <h3 className="committe-details">Dr. Narendra K C, NMIT Nitte</h3>
                <h3 className="committe-details">Dr. Prasanna Kumar M K, BMSCE Bengaluru</h3>
                <h3 className="committe-details">Dr. H V Kumaraswamy, RVCE Bengaluru</h3>
                <h3 className="committe-details">Dr. Shrikanth S Joshi, VIT Pune</h3>
                <h3 className="committe-details">Dr. Vaishali Patil, IIIT Pune</h3>
                <h3 className="committe-details">Dr. Suryakanth V Gangsetty, K L University, Vijayawada</h3>
                <h3 className="committe-details">Dr. Anupam Mandal, Scientist F, CAIR/DRDO</h3>
                <h3 className="committe-details">Dr. Nayeemullah Khan, VIT Chennai</h3>
                <h3 className="committe-details">Dr. Anusuya M, SJCE, Mysore</h3>
                <h3 className="committe-details">Dr. Rajeshwari Hegde, BMSCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. Leena Mary, RGIT, Kottayam</h3>
                <h3 className="committe-details">Dr. Nagarajan T, SSNCE, Chennai</h3>
                <h3 className="committe-details">Dr. Aravind B N, RIT, Hassan</h3>
                <h3 className="committe-details">Dr. Vikram C M, Samsung, Bengaluru</h3>
                <h3 className="committe-details">Dr. Veena S, NAL, Bengaluru</h3>
                <h3 className="committe-details">Dr. K. Jaya Sankar, MCET, Hyderabad</h3>
                <h3 className="committe-details">Dr. John William CM, MCET, Hyderabad </h3>
                <h3 className="committe-details">Dr. Sundara Rajan, CPRI, Bengaluru</h3>
                 <h3 className="committe-details">Dr. Srikanth P C., MCE, Hassan</h3> 
                <h3 className="committe-details">Dr. B V Sumangala, MSRIT, Bengaluru</h3>
                {/* <h3 className="committe-details">Dr. Madhavi M, PESITM, Shimoga</h3> 
                <h3 className="committe-details">Dr. Jayadevappa D, JSSATE, Bengaluru</h3>
                <h3 className="committe-details">Dr. R S Geetha, BMSCE, Bengaluru</h3>
                 <h3 className="committe-details">Dr. Sathyanarayana S V., JNNCE, Shimoga</h3>
                <h3 className="committe-details">Dr. Lakshmi Shrinivasan, MSRIT, Bengaluru</h3>
                <h3 className="committe-details">Dr. Jayashri Kulkarni, VIIT, Kondhawa</h3>
            <h3 className="committe-details">Dr. Yashvanth N, MIT, Manipal</h3> */}
                {/* <h3 className="committe-details">Dr. R Kalpana, BMSCE, Bengaluru</h3> */}
               {/* <h3 className='committe-details'>Dr. Poornima B, BIET, Davanagere</h3>
                <h3 className='committe-details'>Dr. Udayshankara V, JSS University, Mysuru</h3>
                <h3 className="committe-details">Dr. M S Suma, BMSCE, Bengaluru</h3>
                {/* <h3 className="committe-details">Mr. Chandrashekar Patil, Cisco Pvt. Ltd., Bengaluru</h3> 
                <h3 className="committe-details">Dr. Meharunnisa S P, DSCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. Sriram, MSRIT, Bengaluru</h3>
                <h3 className="committe-details">Dr. K Vijayalakshmi, BMSCE, Bengaluru</h3>*/}
                {/* <h3 className="committe-details">Dr. Srinivasa Rao Inabathini, VIT, Vellore</h3>
                <h3 className="committe-details">Dr. S S Kerur, SDMCET, Dharwad</h3>
                <h3 className="committe-details">Dr. Nagamani K, RVCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. Gururaj H L, Vidyavardhaka College of Engineering, Mysore</h3>
                <h3 className="committe-details">Mr. Y Pandu Rangaiah, Vardhaman College of Engineering, Hyderabad</h3>
                <h3 className="committe-details">Dr. D V Kamath, Manipal Institute of Technology</h3>
                <h3 className="committe-details">Dr. Chetan Kumar Vudadha, BITS Pilani, Hyderabad Campus</h3>
                <h3 className="committe-details">Dr. Rajesh G, NITK, Surathkal</h3>
                <h3 className="committe-details">Dr. Shashidhar Koolagudi, NITK, Surathkal</h3>
                <h3 className="committe-details">Dr. Rekha K R, SJBIT, Bengaluru</h3> */}
                {/* <h3 className="committee-details">Dr Aravind B N, Rajeev Institute of Technology</h3>             */}
                {/* <h3 className="committe-details">Dr B V, MSRIT, Bengaluru</h3>
                <h3 className="committe-details">Dr Rudraswamy B, Sri Jayachamarajendra College Of Engineering</h3>
                <h3 className="committe-details">Dr S G Shivaprasad Yadav, MSRIT, Bengaluru</h3>
                <h3 className="committe-details">Dr. Aparanji V M, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Asha Karegowda, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Bharath K P, REVA University</h3>
                <h3 className="committe-details">Dr. Bharathi P T, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Bhargavi K, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Chandrashekar H M, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Chandrika Nataraj, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Dhruvakumar T, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Gayathri S, JSS Science and Technology University</h3>
                <h3 className="committe-details">Dr. Harshalatha Y, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Jagadamba G, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. K Viswanath, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Kavitha H, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Keshava Murthy G N, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Kiranmayi G R, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Madhu B M, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Mallikarjun B C, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Nagaratna Chittaragi, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Narasimhamurthy K C, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Puneeth Kumar T R, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Purushottama T L, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Roopa S, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. S R Manohara, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. S. R. Nirmala, Gauhati University</h3>
                <h3 className="committe-details">Dr. Shashikala B N, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Sheela S J, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Sridhar H S, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Sujatha M N, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Sunitha N R , SIT, Tumakuru</h3>
            <h3 className="committe-details">Dr. Usha L, SIT, Tumakuru</h3> */}
                {/* <h3 className="committee-details">Dr. Vaishali Patil, International Institute of Information Technology,Pune</h3> */}
                {/* <h3 className="committee-details">Dr. Veena Thenkanidiyoor , NIT,Goa</h3> */}
                {/* <h3 className="committe-details">Dr. Venkatesh Murthy B T, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Vinayaka K U, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr.Rashmi Aradhya, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr.Seema B Hegde, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. G Manjula,GSSS Institute Of Engineering And Technology, Mysore </h3>
                <h3 className="committe-details">Dr. Geetha R S, BMSCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. H Kumaraswamy, RVCE, Bengaluru</h3>
            <h3 className="committe-details">Dr. Indira K, MSRIT, Bengaluru</h3> */}
                {/* <h3 className="committee-details">Jayadevappa, JSSATE, Bengaluru</h3> */}
                {/* <h3 className="committe-details">Dr. jyothirmayi Mysore, MSRIT, Bengaluru</h3>
                <h3 className="committe-details">Dr. Kalpana R, BMSCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. Kariyappa B S, RVCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. Kendaganna S, RVCE, Bengaluru</h3>
            <h3 className="committe-details">Dr. Lakshmi KP, BMSCE, Bengaluru</h3> */}
                {/* <h3 className="committee-details">Lakshmi Shrinivasan, MSRIT</h3> */}
                {/* <h3 className="committe-details">Dr. M Chandrashekhar, SSIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. M Rajeswari, BIT, Bengaluru</h3> */}
                {/* <h3 className="committee-details">M S Suma, BMSCE</h3> */}
                {/* <h3 className="committee-details">Dr MADHU B M, SIT</h3> */}
                {/* <h3 className="committe-details">Dr. Mallikarjunaswamy M S, Sri Jayachamarajendra College of Engineering, Mysuru</h3>
                <h3 className="committe-details">Dr. Manjunath Sastry, SIT, Tumakuru, Tumakuru</h3>
                <h3 className="committe-details">Mr. Raveesh Siddaramaiah, SIT, Tumakuru</h3>
                <h3 className="committe-details">Mr. Ravi H K, SIT, Tumakuru</h3>
                <h3 className="committe-details">Mrs. Mala S, SIT, Tumakuru</h3>
                <h3 className="committe-details">Mrs. Shilpashree P S, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Nagamani K, RVCE, Bengaluru</h3>
            <h3 className="committe-details">Dr. Nagaraju P, RVCE, Bengaluru</h3> */}
                {/* <h3 className="committee-details">Narendra K C, NMAM Institute of Technology</h3> */}
                {/* <h3 className="committe-details">Dr. Naveen Kumar, Vidyavardhaka College of Engineering</h3>
                <h3 className="committe-details">Dr. Parimala P, MSRIT, Bengaluru</h3>
                <h3 className="committe-details">Dr. Poornima G, BMSCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. Prakash Biswagar, RVCE, Bengaluru</h3>
            <h3 className="committe-details">Dr. Prasad, RVCE, Bengaluru</h3> */}
                {/* <h3 className="committee-details">Prasanna Kumar M K, BMS college of Engineering</h3> */}
                {/* <h3 className="committe-details">Dr. Prashanth C R, Dr. Ambedkar Institute of Technology, Bengaluru</h3>
                <h3 className="committe-details">Dr. Premananda B S, RVCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. Radhakrishna Bhat, Manipal Institute of Technology, Manipal</h3> */}
                {/* <h3 className="committee-details">Raghavendra Prasad, R V College of Engineering Bengaluru</h3> */}
                {/*<h3 className="committe-details">Dr. Rajeshwari Hegde, BMSCE, Bengaluru</h3>*/}
                {/* <h3 className="committe-details">Dr. Rajeshwari Siddarameswara, SIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Renu Madhavi C H, RVCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. Renukalatha, SSIT, Tumakuru</h3>
                <h3 className="committe-details">Dr. Shashidhar Koolagudi, National Institute of Technology Karnataka</h3>
                <h3 className="committe-details">Dr. Shivakumar Gundappa, Malnad College of Engineering, Hassan</h3>
                <h3 className="committe-details">Dr. Shobha Shankar, Vidyavardhaka College  of Engineering, Mysore</h3>
                <h3 className="committe-details">Dr. Shrikant Joshi, Vishwakarma Institute of Information Technology Pune</h3>
                <h3 className="committe-details">Dr. Shrikant Mehre, IIT Kharagpur</h3>
            <h3 className="committe-details">Dr. Suresh N, SSIT, Tumakuru</h3> */}
                {/* <h3 className="committee-details">Suryakanth Gangashetty, K  L University Vaddeswaram, Andhra Pradesh L University Vaddeswaram, Andhra Pradesh</h3> */}
                {/* <h3 className="committe-details">Dr. Uma B V, RVCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. Usha Rani K R,RVCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. Usha Rani K R, RVCE, Bengaluru</h3>
                <h3 className="committe-details">Dr. Vanitha K M, MSRIT, Bengaluru</h3>
            <h3 className="committe-details">Dr. Vijayalakshmi K, BMSCE, Bengaluru</h3> */}
                {/* <h3 className="committee-details">Vikram C M, Arizona State University</h3> */}
                {/* <h3 className="committe-details">Dr. Vishalakshi Prabhu, RVCE, Bengaluru</h3> */}
                {/*<h3 className="committe-details">Dr. Shyam Lal, NITK, Surathkal, Mangalore</h3>*/}
                {/*<h3 className="committe-details">Dr. Amaresh P Kandagal, Toshiba (India) Pvt. Ltd.</h3>*/}
                </div>
                </div>
            </div>
        </div>
        <div className='footer'>
            <MdOutlineCopyright className='copyright'/> 
            <h2>2025 ICSSES (Last Updated: 19<sup>th</sup> Jun 2024)</h2>
        </div>
    </section>
  )
}
