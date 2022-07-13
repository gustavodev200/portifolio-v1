import {
  DashboardWrapper,
  MainDashboard,
  NavBarDashboard,
  NavgationDash,
  Profile,
  TitleDash,
} from "./style";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <NavBarDashboard>
        <Profile></Profile>
        <NavgationDash></NavgationDash>
      </NavBarDashboard>

      <MainDashboard>
        <TitleDash>
          <h4>ADICIONAR NOVO PROJETO</h4>
        </TitleDash>
        <form></form>
      </MainDashboard>
    </DashboardWrapper>
  );
};

export default Dashboard;
