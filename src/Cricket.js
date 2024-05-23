import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function CricApp () {
  const n = 100;
  const [data, setData] = useState(Array(n).fill(null));
  const [profile, setProfile] = useState(Array(n).fill(null));

  useEffect(() => {
    const fetchDataAndProfile = async () => {
      try {
        const response = await axios.get(`${baseUrl}/retrieve`);
        const { _id, ...ids } = response.data;
        const idsArray = Object.values(ids);
        
        const dataPromises = idsArray.map(async id => {
          const response = await axios.get(`${baseUrl}/api/data/${id}`);
          return response.data;
        });

        const profilePromises = idsArray.map(async id => {
          const response = await axios.get(`${baseUrl}/api/profile/${id}`);
          return response.data;
        });

        const resolvedData = await Promise.all(dataPromises);
        const resolvedProfile = await Promise.all(profilePromises);

        setData(resolvedData);
        setProfile(resolvedProfile);
      } catch (error) {
        console.error(`Error fetching data and profile: ${error}`);
      }
    };

    fetchDataAndProfile();

    const refreshInterval = setInterval(fetchDataAndProfile, 8000);
    return () => clearInterval(refreshInterval);
  }, []);
  return (
    <>
         <Link to="/form" className="button-link">Profiles</Link>
         <Link to="/" className="button-link">Main app</Link>
        <div className="flex-container">
        {data.map((dataItem, index) => (
          <DataComponent key={index} data={dataItem} profile={profile[index]} />
        ))}
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
        padding-top: 15px;
        padding-right: 15px;
        padding-bottom: 15px;
        padding-left: 15px;
        flex-basis: auto; /* or any other value you want */
        /* Prevent flex items from shrinking */
        flex-shrink: 0;
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
      gap: 5px; /* 20px reduced by 25% */
      font-size: 12px; /* 20px reduced by 25% */
      color: #2d2d34;
      margin-bottom: 5px; 
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
