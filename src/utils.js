import { v4 as uuidv4 } from "uuid"
function dashboardList() {
  return [
    {
      name: "Total Watch Time",
      author: "Robert Crocker",
      image: "./images/img-01",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi1",
      id: uuidv4(),
      active: true,
    },
    {
      name: "Average Watch Time",
      author: "Robert Crocker",
      image: "./images/img-02",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi2",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Total Video Views",
      author: "Robert Crocker",
      image: "./images/img-03",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi3",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Total Unique Views",
      author: "Robert Crocker",
      image: "./images/img-04",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi4",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Average Views per Viewer",
      author: "Robert Crocker",
      image: "./images/img-05",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi5",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Impressions CTR",
      author: "Robert Crocker",
      image: "./images/img-06",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi6",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Audience Retention",
      author: "Robert Crocker",
      image: "./images/img-07",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi7",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Engagement",
      author: "Robert Crocker",
      image: "./images/img-08",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi8",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Subscribers Gained",
      author: "Robert Crocker",
      image: "./images/img-09",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi9",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Subscribers Lost",
      author: "Robert Crocker",
      image: "./images/img-10",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi10",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Estimated Revenue",
      author: "Robert Crocker",
      image: "./images/img-11",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi11",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Monitized Playbacks",
      author: "Robert Crocker",
      image: "./images/img-12",
      url:
        "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi12",
      id: uuidv4(),
      active: false,
    },
  ]
}

export default dashboardList
