import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from 'react-router-dom';
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function YoutubeApp() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);
  const [profile1, setProfile1] = useState(null);
  const [profile2, setProfile2] = useState(null);
  const [profile3, setProfile3] = useState(null);
  const [profile4, setProfile4] = useState(null);
  const [profile5, setProfile5] = useState(null);
 
  useEffect(() => {
    const fetchData1 = () => {
      fetch(`${baseUrl}/api/youtube/data1`)
        .then(res => res.json())
        .then(data => setData1(data))
        .catch(error => console.error('Error fetching data1:', error));
    };
  
    const fetchData2 = () => {
      fetch(`${baseUrl}/api/youtube/data2`)
        .then(res => res.json())
        .then(data => setData2(data))
        .catch(error => console.error('Error fetching data2:', error));
    };

    const fetchData3 = () => {
      fetch(`${baseUrl}/api/youtube/data3`)
        .then(res => res.json())
        .then(data => setData3(data))
        .catch(error => console.error('Error fetching data2:', error));
    };

    const fetchData4 = () => {
      fetch(`${baseUrl}/api/youtube/data4`)
        .then(res => res.json())
        .then(data => setData4(data))
        .catch(error => console.error('Error fetching data2:', error));
    };

    const fetchData5 = () => {
      fetch(`${baseUrl}/api/youtube/data5`)
        .then(res => res.json())
        .then(data => setData5(data))
        .catch(error => console.error('Error fetching data2:', error));
    };
  
    const fetchProfile1 = () => {
      fetch(`${baseUrl}/api/youtube/profile1`)
        .then(res => res.json())
        .then(data => setProfile1(data))
        .catch(error => console.error('Error fetching profile1:', error));
    };
  
    const fetchProfile2 = () => {
      fetch(`${baseUrl}/api/youtube/profile2`)
        .then(res => res.json())
        .then(data => setProfile2(data))
        .catch(error => console.error('Error fetching profile2:', error));
    };

    const fetchProfile3 = () => {
      fetch(`${baseUrl}/api/youtube/profile3`)
        .then(res => res.json())
        .then(data => setProfile3(data))
        .catch(error => console.error('Error fetching profile2:', error));
    };
  
    const fetchProfile4 = () => {
      fetch(`${baseUrl}/api/youtube/profile4`)
        .then(res => res.json())
        .then(data => setProfile4(data))
        .catch(error => console.error('Error fetching profile2:', error));
    };

    const fetchProfile5 = () => {
      fetch(`${baseUrl}/api/youtube/profile5`)
        .then(res => res.json())
        .then(data => setProfile5(data))
        .catch(error => console.error('Error fetching profile2:', error));
    };
    // Fetch data initially
    fetchData1();
    fetchData2();
    fetchData3();
    fetchData4();
    fetchData5();

    fetchProfile1();
    fetchProfile2();
    fetchProfile3();
    fetchProfile4();
    fetchProfile5();
  
    // Set interval for data refresh every 10 seconds
    const dataRefreshInterval = setInterval(() => {
      fetchData1();
      fetchData2();
      fetchData3();
      fetchData4();
      fetchData5();
    }, 10000);
  
    // Set interval for profile refresh every one hour
    const profileRefreshInterval = setInterval(() => {
      fetchProfile1();
      fetchProfile2();
      fetchProfile3();
      fetchProfile4();
      fetchProfile5();
    }, 3600000);
  
    // Cleanup intervals on component unmount
    return () => {
      clearInterval(dataRefreshInterval);
      clearInterval(profileRefreshInterval);
    };
  }, []);
  

  return (
    <>
      <Link to="/form" className="button-link">Profiles</Link>
      <Link to="/" className="button-link">Main app</Link>
      <Link to="/updatecricket" className="button-link">Update Cricket</Link>
      <Link to="/updateyoutube" className="button-link">Update Youtube</Link>
      <Link to="/cricket" className="button-link">Cricket</Link>
      <Link to="/youtube" className="button-link">Youtube</Link>
        <div className="flex-container">
        <DataComponent data={data1} profile={profile1} />
        <DataComponent data={data2} profile={profile2} />
        <DataComponent data={data3} profile={profile3} />
        <DataComponent data={data4} profile={profile4} />
        <DataComponent data={data5} profile={profile5} />
        </div>
        <style jsx>{`
        .flex-container {
          display: flex;
          justify-content: space-between;
          max-width: 2000px;
          margin-top: 0 px;
          margin-right: auto;
          margin-bottom: auto;
          margin-left: auto;
          padding-top: 1px;
          padding-right: 10px;
          padding-bottom: 10px;
          padding-left: 10px;
        }

        .flex-box {
          flex: 0 0 calc(5% - 10px); /* Decreased by 50% */
          background-color: #fff;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        @media (max-width: 768px) {
          .flex-box {
            flex: 0 0 calc(12.5% - 10px); /* Adjust accordingly */
          }
        }

        @media (max-width: 480px) {
          .flex-box {
            flex: 0 0 calc(25% - 10px); /* Adjust accordingly */
          }
        }
        .button-link {
          display: inline-flex;
          width: auto;
          padding: 7.5px;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          margin-right: 20px;
          transition: background-color 0.3s ease;
        }
        
        .button-link:hover {
          background-color: #0056b3; /* Darker shade of blue on hover */
        }
      `}</style>
      </>
  );
}

 function  DataComponent (props) {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <img
              loading="lazy"
              srcSet={props?.profile?.data?.profile_img}
              className="img"
            />
            <div className="div-4">Activity</div>
            <div className="div-5" />
          </div>
          <div className="div-6">
            <div className="div-7">{props?.profile?.data?.name}</div>
            <div className="div-8">
              <div className="div-9">
                <img
                  loading="lazy"
                  srcSet={props?.profile?.data?.badgeInfo.badge_image_url}
                  className="img-2"
                />
                <div className="div-10">{props?.profile?.data?.badgeInfo.badge_name}</div>
              </div>
            </div>
          </div>
        </div>
        {props?.data?.data?.feed?.records.map(record => (
        <div className="div-11">
          <div className="div-12">
            <img
              loading="lazy"
              srcSet={record.image_url}
              className="img-3"
            />
            <div className="div-13">
             {record.event_name}
            </div>
          </div>
          <hr class="line"></hr>
          <div className="div-14">{record.trade_price_text}</div>
        </div>
         ))}
      </div>
      <style jsx>{`
    .div {
        background-color: #fff;
        display: flex;
        width: 20%;
        max-width: 514.5px; /* 686px reduced by 25% */
        flex-direction: column;
        font-weight: 400;
        /* 80px, 39px, 47px reduced by 25% */
        padding-top: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
    }
    @media (max-width: 991px) {
        .div {
            padding: 0 15px; /* 20px reduced by 25% */
        }
    }
    .div-2 {
        align-self: start;
        display: flex;
        margin-top: 3px; /* 4px reduced by 25% */
        gap: 15px; /* 20px reduced by 25% */
    }
    .div-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 10.75px; /* 21px reduced by 25% */
        color: #2d2d34;
        white-space: nowrap;
        flex: 1;
    }
    @media (max-width: 991px) {
        .div-3 {
            white-space: initial;
        }
    }
    .img {
        aspect-ratio: 1;
        object-fit: auto;
        object-position: center;
        width: 60.75px; /* 141px reduced by 25% */
        border-radius: 50%;
    }
    .div-4 {
        font-family: Inter, sans-serif;
        margin-top: 15.5px; /* 46px reduced by 25% */
    }
    @media (max-width: 991px) {
        .div-4 {
            margin-top: 30px; /* 40px reduced by 25% */
        }
    }
    .div-5 {
        border-color: rgba(0, 0, 0, 1);
        border-style: solid;
        border-width: 0.75px; /* 1px reduced by 25% */
        background-color: #000;
        margin-top: 5.25px; /* 7px reduced by 25% */
        width: 66px; /* 88px reduced by 25% */
        height: 0.75px; /* 1px reduced by 25% */
    }
    .div-6 {
        display: flex;
        margin-top: 10px;
        flex-direction: column;
        flex: 1;
      
    }
    .div-7 {
        color: #2d2d34;
        font: 18.5px Inter, sans-serif; /* 30px reduced by 25% */
        padding-top: 1.25px;
        padding-right: 1.25px;
        padding-bottom: 1.75px;
        padding-left: 1.25px;
    }
    .div-8 {
        background-color: rgba(0, 0, 0, 0);
        display: flex;
        /* 23px reduced by 25% */
        width: 100%;
        flex-direction: column;
        font-size: 10px; /* 20px reduced by 25% */
        color: #676767;
        white-space: nowrap;
        justify-content: center;
        padding: 0.55px 1.25px; /* 1px, 3px reduced by 25% */
    }
    @media (max-width: 991px) {
        .div-8 {
            white-space: initial;
        }
    }
    .div-9 {
        border-radius: 10px; /* 17.25px reduced by 25% */
        border-color: rgba(230, 230, 235, 1);
        border-style: solid;
        border-width: 0.75px; /* 1px reduced by 25% */
        background-color: #fcfdfd;
        display: flex;
        gap: 5px; /* 16px reduced by 25% */
        padding: 1.25px 1.25px; /* 9px, 17px reduced by 25% */
    }
    @media (max-width: 991px) {
        .div-9 {
            white-space: initial;
        }
    }
    .img-2 {
      aspect-ratio: 1; /* 0.88 reduced by 25% */
      object-fit: auto;
      object-position: center;
      width: 17.25px; /* 23px reduced by 25% */
      border-radius: 50%;
  }
  .div-10 {
      font-family: Inter, sans-serif;
      margin: auto 0;
  }
  .div-11 {
      border-radius: 7.5px; /* 10px reduced by 25% */
      background-color: rgba(252, 253, 253, 1);
      box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25); /* 4px reduced by 25% */
      display: flex;
      margin-top: 10px; /* 28px reduced by 25% */
      flex-direction: column;
      align-items: start;
      padding: 10px; /* 22px, 80px, 22px, 32px reduced by 25% */
  }
  @media (max-width: 991px) {
      .div-11 {
          padding: 15px; /* 0, 20px reduced by 25% */
      }
  }
  .div-12 {
      display: flex;
      gap: 10px; /* 20px reduced by 25% */
      font-size: 12px; /* 20px reduced by 25% */
      color: #2d2d34;
      margin-bottom: 9px; 
  }
  @media (max-width: 991px) {
      .div-12 {
          flex-wrap: wrap;
      }
  }
  .img-3 {
      aspect-ratio: 1;
      object-fit: auto;
      object-position: center;
      width: 35.25px; /* 63px reduced by 25% */
  }
  .line {
    border: none;
    border-top: 1px solid #cccccc;  /* Adjust color and thickness as needed */
    width: 100%; /* Ensure it spans the width of its container */
    margin: 1px 0; /* Adjust spacing as needed */
  }
  .div-13 {
      font-family: Inter, sans-serif;
      flex-grow: 1;
      flex-basis: auto;
      margin: auto 0;
  }
  .div-14 {
      color: #2d2d34;
      margin-top: 2.75px; /* 25px reduced by 25% */
      font: 12px Inter, sans-serif; /* 19px reduced by 25% */
  }
  @media (max-width: 991px) {
      .div-14 {
          max-width: 100%;
      }
  }
`}</style>
</>
); 
}
