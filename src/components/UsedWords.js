import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class UsedWords extends Component {
  render() {
    return (
      <div className="container">
        <Breadcrumb className="">
          <div className=" m-3">
            <button className="btn btn-warning disabled">katze</button>{' '}
            <button className="btn btn-warning disabled">auto</button>{' '}
            <button className="btn btn-warning disabled">aschenbecher</button>{' '}
          </div>
        </Breadcrumb>
      </div>
    );
  }
}

export default UsedWords;
