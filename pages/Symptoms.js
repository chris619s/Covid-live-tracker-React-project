import React from "react";
import "../App.css";
import {Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Doctor from "../img/doctor.svg";
import Medical from "../img/medical.svg";
import Distance from "../img/distance.svg";
import Hand from "../img/hand.svg";
import Overview from "../img/overview.svg";


function Symptoms() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "90vh",
        textalign: "center",
      }}
      
    >
    <div style={{ margin: "20px" }}>
    <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab >Symptoms</Tab>
      <Tab>Prevention</Tab>
      <Tab>treatment</Tab>
    </TabList>

    <TabPanel>
      <p>
      Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
      </p>
      <p>
      Most people who fall sick with COVID-19 will experience mild to moderate symptoms and 
      recover without special treatment.
      </p>
    <hr />
    <b>HOW IT SPREADS</b>
    <br />
    <br />

    <img src={Overview} style ={{ height:250}} 
    ></img>
    <br />
    <br />
    <p>
    The virus that causes COVID-19 is mainly transmitted through droplets generated
     when an infected person coughs, sneezes, or exhales.
     These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
    </p>
    <p>
    You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19,
     or by touching a contaminated surface and then your eyes, nose or mouth.  

     Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and
      recover without requiring special treatment.  
     Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic
      respiratory disease, and cancer are more likely to develop serious illness.

The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, 
the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or
 using an alcohol based rub frequently and not touching your face. 

The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected
 person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by
  coughing into a flexed elbow).

At this time, there are no specific vaccines or treatments for COVID-19. However, there are many
 ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as
  soon as clinical findings become available.
    </p>
      <p>
          <br />
          <hr />
        Source:{' '}
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">
          WHO.int
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
      COVID-19 affects different people in different ways. 
      Most infected people will develop mild to moderate illness and recover without hospitalization. 
      </p>
      <br />
      <img src={Medical} style ={{ height:250}} 
    ></img>
      <p>
      <b>Most common symptoms:</b>
    </p>
    <div>
       <ul>
      <li>fever</li>
      <li>dry cough</li>  
        <li>tiredness.</li>
        </ul>
        </div>
        <p>
        <b>Less common symptoms:</b>
        </p>
        <div>
        <ul>
        <li>aches and pains.</li>
        <li>sore throat.</li>
        <li>diarrhoea.</li>
        <li>conjunctivitis.</li>
        <li>headache.</li>
        <li> loss of taste or smell.</li>
        <li>a rash on skin, or discolouration of fingers or toes.</li>
        </ul>
        </div>
        <p>
      <b>Serious symptoms:</b>
    </p>
    <div>
        <ul>
    <li>difficulty breathing or shortness of breath.</li>
    <li>chest pain or pressure.</li>
    <li>loss of speech or movement.</li>
    </ul>
    </div>
    <p>
    Seek immediate medical attention if you have serious symptoms.
      Always call before visiting your doctor or health facility. </p>
    <img src={Doctor } style ={{ height:250}}
    ></img>

<p>People with mild symptoms who are otherwise 
healthy should manage their symptoms at home.</p> 

<p>On average it takes 5–6 days from when someone 
is infected with the virus for symptoms to show, however it can take up to 14 days. 
    </p>
        <br />
        <hr />

      <p>
        Source:{' '}
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">
          WHO.int
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
      <img src={Distance} style ={{ height:250}} 
    ></img>
    <br /> 
       <b>
       To prevent infection and to slow transmission of COVID-19, do the following:
       </b>
       <br/>
       
       <div>
        <ul>
       <li>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.</li>
       <li> Maintain at least 1 metre distance between you and people coughing or sneezing.</li>
       <li>Avoid touching your face.</li>
       <li>Cover your mouth and nose when coughing or sneezing.</li>
       <li>Stay home if you feel unwell.</li>
       <li>Refrain from smoking and other activities that weaken the lungs.</li>
       <li>Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.</li>
         </ul>
       </div>
       <br />
       <hr />
      </p>
      <p>
        Source:{' '}
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">
          WHO.int
        </a>
      </p>
    </TabPanel>
    <TabPanel>
        <b>Is there a vaccine, drug or treatment for COVID-19?</b>
      <p>
      While some western, traditional or home remedies may provide comfort and 
      alleviate symptoms of mild COVID-19, there are no medicines that have been shown to 
      prevent or cure the disease. WHO does not recommend self-medication with any medicines, 
      including antibiotics, as a prevention or cure for COVID-19. However, there are several 
      ongoing clinical trials of both western and traditional medicines. WHO is coordinating efforts 
      to develop vaccines and medicines to prevent and treat COVID-19 
      and will continue to provide updated information as soon research results become available.
      </p>
      <img src={Hand} style ={{ height:250}} 
    ></img>
      <br />
      <p>The most effective ways to protect yourself and others against COVID-19 are to:</p>
      <br />
      <div>
          <ul>
         <li> Clean your hands frequently and thoroughly</li>
          <li>Avoid touching your eyes, mouth and nose</li>
          <li>Cover your cough with the bend of elbow or tissue.</li>
          <li>If a tissue is used, discard it immediately and wash your hands.</li>
          <li>Maintain a distance of at least 1 metre from others. </li>
          </ul>
      </div>
      <p>
      Practicing hand and respiratory hygiene
       is important at ALL times and is the best way to protect others and yourself.
      </p>
      <p>
      When possible maintain at least a 1 meter distance between yourself and others.
       This is especially important if you are standing by someone who is coughing or sneezing.  
       Since some infected persons may not yet be exhibiting symptoms or their symptoms may be mild, maintaining a physical 
      distance with everyone is a good idea if you are in an area where COVID-19 is circulating.    
      </p>
<br />
<hr />
      <p>
        Source:{' '}
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">
          WHO.int
        </a>
      </p>
    </TabPanel>
  
  </Tabs>
    </div>

        

    </div>
   );   
 }

 export default Symptoms;
 