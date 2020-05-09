import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from "@blueprintjs/core";
import {
  isBrowser,
  isMobile
} from "react-device-detect";

import Header from "./header"
import { light_colors } from '../helpers/colors'
import styled from 'styled-components';

const TabContainer = styled.div`
  display:flex;
  flex:1;
  height:45px;
  border-radius:6px;
  background:red;
`
//background-color:#F4F4F4;

const TabItem = styled.div`
  flex-basis: 100%;
`
const TabTitle = styled.div`
  background:${props => props.active ? "orange" : "cyan"};
`

const CustomTabs = styled.div`
  background:${light_colors.BUTTON_BG};
  height:40px;
  width:380px;
  border-radius:8px;
`

const Issues = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

const Devices = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

const Tablar = ({ t }) => {
  const [loading, setLoading] = useState(true);
  const [tabId, setTabId] = useState("issues");
  useEffect(() => {
    console.log(i18n)
    console.log(isMobile, loading)
  });
  //
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: 'center', margin: "0 auto", marginTop: '20em', padding: '3em' }}>
        <CustomTabs as={Tabs} id="TabsExample" animate={true} selectedTabId={tabId} onChange={e => setTabId(e)}>
          <Tab id="issues" title={t('tab.issues')} panel={<Issues title={"Issues"} />} />
          <Tab id="devices" title={t('tab.devices')} panel={<Devices title={"Devices"} />} />
        </CustomTabs>
      </div>
      <style jsx>{`
        .bp3-tab-indicator {
          height:100% !important;
        }
      `}</style>

    </div>
  )
}

Tablar.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(Tablar)
