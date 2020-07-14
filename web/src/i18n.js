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

import i18n from "i18next";
import zh from './locales/zh.json'
import en from './locales/en.json'

const resources = {
  en: en,
  zh: zh
};

i18n
  .init({
    lng: "en",
    
    resources: resources,
    
    keySeparator: false,
    
    interpolation: {
      escapeValue: false
    },
    //debug: true,
    saveMissing: true,
  })

export default i18n;
