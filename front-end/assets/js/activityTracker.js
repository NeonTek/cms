export function trackActivity(activity) {
  let activities = JSON.parse(localStorage.getItem("recentActivities")) || [];
  activities.unshift({
    activity: activity,
    timestamp: new Date().toLocaleString,
  });
  if (activities.length > 5) {
    activities.pop();
  }

  localStorage.setItem("recentActivities", JSON.stringify(activities));
}

export function displayRecentActivities() {
  let activities = JSON.parse(localStorage.getItem("recentActivities")) || [];
  const activityList = document.getElementById("recents");
  console.log(activityList);
  activityList.innerHTML = "";
  activities.forEach((activity) => {
    const activityItem = document.createElement("li");
    activityItem.textContent = `${activity.activity} at ${activity.timestamp}`;
    activityList.appendChild(activityItem);
  });
}
