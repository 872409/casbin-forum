// Copyright 2020 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import Header from "./Header";

class SignoutBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
    };
  }

  onSigninAgain() {
    // eslint-disable-next-line no-restricted-globals
    location.href = "/signin";
  }

  render() {
    return (
      <div className="box">
        <Header item="Sign Out" />
        <div className="inner">
          You have signed out, with all personal information wiped out from this computer.
          <div className="sep20" />
          <input type="button" className="super normal button" onClick={this.onSigninAgain} value="Sign In Again" />
        </div>
      </div>
    );
  }
}

export default SignoutBox;
