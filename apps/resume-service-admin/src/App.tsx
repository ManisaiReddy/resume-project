import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WorkList } from "./work/WorkList";
import { WorkCreate } from "./work/WorkCreate";
import { WorkEdit } from "./work/WorkEdit";
import { WorkShow } from "./work/WorkShow";
import { EducationList } from "./education/EducationList";
import { EducationCreate } from "./education/EducationCreate";
import { EducationEdit } from "./education/EducationEdit";
import { EducationShow } from "./education/EducationShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { AwardsList } from "./awards/AwardsList";
import { AwardsCreate } from "./awards/AwardsCreate";
import { AwardsEdit } from "./awards/AwardsEdit";
import { AwardsShow } from "./awards/AwardsShow";
import { ProjectsList } from "./projects/ProjectsList";
import { ProjectsCreate } from "./projects/ProjectsCreate";
import { ProjectsEdit } from "./projects/ProjectsEdit";
import { ProjectsShow } from "./projects/ProjectsShow";
import { SkillsList } from "./skills/SkillsList";
import { SkillsCreate } from "./skills/SkillsCreate";
import { SkillsEdit } from "./skills/SkillsEdit";
import { SkillsShow } from "./skills/SkillsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ResumeService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Work"
          list={WorkList}
          edit={WorkEdit}
          create={WorkCreate}
          show={WorkShow}
        />
        <Resource
          name="Education"
          list={EducationList}
          edit={EducationEdit}
          create={EducationCreate}
          show={EducationShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="Awards"
          list={AwardsList}
          edit={AwardsEdit}
          create={AwardsCreate}
          show={AwardsShow}
        />
        <Resource
          name="Projects"
          list={ProjectsList}
          edit={ProjectsEdit}
          create={ProjectsCreate}
          show={ProjectsShow}
        />
        <Resource
          name="Skills"
          list={SkillsList}
          edit={SkillsEdit}
          create={SkillsCreate}
          show={SkillsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
