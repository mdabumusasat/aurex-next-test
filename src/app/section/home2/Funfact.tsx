"use client";
import React from "react";
import CounterUp from '../../components/elements/CounterUp';

const counters = [
  { value: 39 },  
  { value: 298 },  
  { value: 134 },  
];

export default function FunfactSectionLayout2() {
  return (
      <section className="funfact-section-layout2">
        <div className="outer-box">
          <div className="funfact-box-layout2">
            <div className="inner-box">
              <h5 className="title">Brand Strategy</h5>
              <div className="count-box"><span className="count-text"><CounterUp end={counters[0].value} /></span>%</div>
              <div className="text">Duis aute irute dolor in reprehenderit in voluptate velit on dolore fugiat nulla pariatur.</div>
            </div>
          </div>
          <div className="funfact-box-layout2">
            <div className="inner-box">
              <h5 className="title">Projects complete</h5>
              <div className="count-box"><span className="count-text"><CounterUp end={counters[1].value} /></span>%</div>
              <div className="text">Excepted sint provident, sunt the culpa qui official dessert mollit.</div>
            </div>
          </div>
          <div className="funfact-box-layout2">
            <div className="inner-box">
              <h5 className="title">Business Expertise</h5>
              <div className="count-box"><span className="count-text"><CounterUp end={counters[2].value} /></span>%</div>
              <div className="text">Dues aute inure dolor in reprehenderit in voluptate relit on cilium dolore fugal null pariature.</div>
            </div>
          </div>
        </div>
      </section>
  );
}