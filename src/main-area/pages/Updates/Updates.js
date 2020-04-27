import React from 'react'
import MainTitle from "../../components/MainTitle";
import './Updates.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const updateData = [
  {
    date: "2019-07-12",
    list: ["> Add recent works and experience (hirevibes, fast.io)"]
  },
  {
    date: "2019-04-02",
    list: ["> Optimize Redux config store", "> Add Updates Pages"]
  },
  {
    date: "2019-03-26",
    list: ["> Add social links"]
  },
  {
    date: "2019-03-23",
    list: ["> Add animations"]
  },
  {
    date: "2019-03-22",
    list: ["> Fix mobile responsive"]
  },
  {
    date: "2019-03-21",
      list: ["> Initial release"]
  }
];

const Updates = () => {
  return (
    <div className="Updates">
          <MainTitle title="Recent Changes" subTitle="Updates" />
          <div className="Updates__listContainer">
                <ul>
                    {
                      updateData.map((item, idx)=> {
                          return (
                              <div className="Updates__listContainer__item">
                                <p><FontAwesomeIcon icon='caret-right' />{item.date}</p>
                                {
                                    item.list.map((li, index) => {
                                        return <li key={index}>{li}</li>
                                    })
                                }
                              </div>
                          )
                      })
                    }    
                </ul>     
          </div>
    </div>
  )
}

export default Updates
