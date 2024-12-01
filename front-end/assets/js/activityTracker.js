export function trackActivity(activity) {
  let activities = JSON.parse(localStorage.getItem("recentActivities")) || [];
  activities.unshift({
    activity: activity,
    timestamp: new Date().toLocaleString(),
  });
  if (activities.length > 5) {
    activities.pop();
  }

  localStorage.setItem("recentActivities", JSON.stringify(activities));
}

export function displayRecentActivities() {
  let activities = JSON.parse(localStorage.getItem("recentActivities")) || [];
  const activityList = document.getElementById("recents");
  activityList.innerHTML = "";
  activities.forEach((activity) => {
    const activityItem = document.createElement("li");
    activityItem.textContent = `${activity.activity} at ${activity.timestamp}`;
    activityList.appendChild(activityItem);
  });
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    trackActivity(`Clicked button: ${button.textContent}`);
    displayRecentActivities();
  });
});
document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", () => {
    trackActivity(`Clicked link: ${anchor.textContent}`);
    displayRecentActivities();
  });
});

document.querySelectorAll(".sidebar_link").forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetSection = e.target.getAttribute("data-section");
    trackActivity(`Navigated to section: ${targetSection}`);
    displayRecentActivities();
  });
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", () => {
    trackActivity(`Submitted form: ${form.id}`);
    displayRecentActivities();
  });
});

const dropZone = document.getElementById("dropZone");
if (dropZone) {
  dropZone.addEventListener("click", () => {
    trackActivity("Clicked on upload drop zone");
  });
}

window.addEventListener("load", () => {
  trackActivity("Page loaded");
  displayRecentActivities();
});
activityList.innerHTML = "";
activities.forEach((activity) => {
  const activityItem = document.createElement("li");
  activityItem.textContent = `${activity.activity} at ${activity.timestamp}`;
  activityList.appendChild(activityItem);
});
