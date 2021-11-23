// https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/getting-started/
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler as SchedulerComponent,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DayView,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import { data } from "./Data/data";

const Scheduler = () => {
  const [currentViewName, setCurrentViewName] = useState("work-week");
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Paper>
      <SchedulerComponent data={data} height={660}>
        <ViewState
          defaultCurrentDate="2021-11-25"
          currentViewName={currentViewName}
          onCurrentViewNameChange={setCurrentViewName}
          currentDate={currentDate}
          onCurrentDateChange={setCurrentDate}
        />

        <WeekView startDayHour={10} endDayHour={19} />
        <WeekView
          name="work-week"
          displayName="Work Week"
          excludedDays={[0, 6]}
          startDayHour={9}
          endDayHour={19}
        />
        <MonthView />
        <DayView />

        <Toolbar />
        <DateNavigator />
        <ViewSwitcher />
        <Appointments />
        <AppointmentTooltip showCloseButton showOpenButton />
        <AppointmentForm readOnly />
      </SchedulerComponent>
    </Paper>
  );
};

export default Scheduler;
