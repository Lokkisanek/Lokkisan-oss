const BOOT_OPTIONS = [
  { label: "Start Windows Normally", action: "boot-portfolio" },
  { label: "Install Windows", action: "install" },
  { label: "Onboard NIC (IPV4)", action: "nic-ipv4" },
  { label: "Onboard NIC (IPV6)", action: "nic-ipv6" },
];

const OTHER_OPTIONS = [
  { label: "BIOS Setup", action: "bios-setup" },
  { label: "Device Configuration", action: "device-config" },
  { label: "BIOS Flash Update", action: "flash-update" },
  { label: "Change Boot Mode Settings", action: "boot-mode" },
];

const ALL_ITEMS = [...BOOT_OPTIONS, ...OTHER_OPTIONS];

let selectedIndex = 0;

function renderMenus() {
  const bootList = document.getElementById("boot-options");
  const otherList = document.getElementById("other-options");

  bootList.innerHTML = BOOT_OPTIONS.map((item, i) =>
    createMenuItemHTML(item, i)
  ).join("");

  otherList.innerHTML = OTHER_OPTIONS.map((item, i) =>
    createMenuItemHTML(item, i + BOOT_OPTIONS.length)
  ).join("");
}

function createMenuItemHTML(item, index) {
  const selected = index === selectedIndex ? " selected" : "";
  return `<li class="menu-item${selected}" data-index="${index}">${item.label}</li>`;
}

function updateSelection() {
  document.querySelectorAll(".menu-item").forEach((el) => {
    const index = Number(el.dataset.index);
    el.classList.toggle("selected", index === selectedIndex);
  });
}

function moveSelection(direction) {
  selectedIndex = (selectedIndex + direction + ALL_ITEMS.length) % ALL_ITEMS.length;
  updateSelection();
}

function handleEnter() {
  const item = ALL_ITEMS[selectedIndex];
  switch (item.action) {
    case "boot-portfolio":
      flashMessage("Booting portfolio...");
      break;
    default:
      flashMessage(`${item.label} — not implemented`);
  }
}

function flashMessage(text) {
  const status = document.querySelector(".initializing");
  if (!status) return;
  const original = status.textContent;
  status.textContent = text;
  setTimeout(() => {
    status.innerHTML = 'Initializing<span class="dots">..</span>';
  }, 2000);
}

function detectSystem() {
  const ua = navigator.userAgent;
  let system = "Unknown OS";

  if (ua.includes("Mac OS X")) {
    const match = ua.match(/Mac OS X (\d+[._]\d+[._]?\d*)/);
    system = match ? `macOS ${match[1].replace(/_/g, ".")}` : "macOS";
  } else if (ua.includes("Windows NT")) {
    system = "Windows";
  } else if (ua.includes("Linux")) {
    system = "Linux";
  }

  document.getElementById("user-system").textContent = system;
}

async function detectIP() {
  const ipEl = document.getElementById("user-ip");
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    ipEl.textContent = data.ip;
  } catch {
    ipEl.textContent = "unavailable";
  }
}


document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      e.preventDefault();
      moveSelection(-1);
      break;
    case "ArrowDown":
      e.preventDefault();
      moveSelection(1);
      break;
    case "Enter":
      e.preventDefault();
      handleEnter();
      break;
    case "Escape":
      e.preventDefault();
      flashMessage("Boot cancelled.");
      break;
  }
});

renderMenus();
detectSystem();
detectIP();
initLogo();
