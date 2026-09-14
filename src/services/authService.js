// Service temporaire (mock) - à remplacer par les vrais appels API
// une fois que le backend sera prêt et que tu auras les endpoints.

const DELAY = 500; // simule la latence réseau

function wait(ms = DELAY) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const MOCK_USERS_KEY = "mock_users";
const CURRENT_USER_KEY = "mock_current_user_email";

const MOCK_ORDERS = [
  {
    id: "1",
    date: "2026-08-15",
    status: "delivered",
    total: 129000,
    items: [
      { id: "p1", name: "Coque iPhone 13", quantity: 1, price: 15000 },
      { id: "p2", name: "Samsung Galaxy A54", quantity: 1, price: 114000 },
    ],
  },
  {
    id: "2",
    date: "2026-09-01",
    status: "processing",
    total: 45000,
    items: [{ id: "p3", name: "Chargeur rapide 65W", quantity: 3, price: 15000 }],
  },
  {
    id: "3",
    date: "2026-09-05",
    status: "shipped",
    total: 87000,
    items: [
      { id: "p4", name: "Écouteurs sans fil Pro", quantity: 1, price: 45000 },
      { id: "p5", name: "Verre trempé iPhone 15", quantity: 2, price: 6000 },
      { id: "p6", name: "Câble USB-C 2m", quantity: 3, price: 10000 },
    ],
  },
  {
    id: "4",
    date: "2026-09-10",
    status: "pending",
    total: 259000,
    items: [{ id: "p7", name: "iPhone 14 (128 Go, reconditionné)", quantity: 1, price: 259000 }],
  },
  {
    id: "5",
    date: "2026-07-22",
    status: "cancelled",
    total: 18000,
    items: [{ id: "p8", name: "Support téléphone voiture", quantity: 1, price: 18000 }],
  },
  {
    id: "6",
    date: "2026-06-30",
    status: "delivered",
    total: 34000,
    items: [
      { id: "p9", name: "Batterie externe 10 000mAh", quantity: 1, price: 22000 },
      { id: "p10", name: "Adaptateur secteur", quantity: 1, price: 12000 },
    ],
  },
];

function getStoredUsers() {
  const raw = localStorage.getItem(MOCK_USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveStoredUsers(users) {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
}

function fakeToken(email) {
  return btoa(`${email}:${Date.now()}`);
}

// ---------- AUTH ----------

export async function registerUser({ name, email, password }) {
  await wait();
  const users = getStoredUsers();

  if (users.some((u) => u.email === email)) {
    throw new Error("Un compte existe déjà avec cet email.");
  }

  const newUser = { id: crypto.randomUUID(), name, email, password };
  users.push(newUser);
  saveStoredUsers(users);
  localStorage.setItem(CURRENT_USER_KEY, email);

  const { password: _pw, ...safeUser } = newUser;
  return { token: fakeToken(email), user: safeUser };
}

export async function loginUser({ email, password }) {
  await wait();
  const users = getStoredUsers();
  const found = users.find((u) => u.email === email && u.password === password);

  if (!found) {
    throw new Error("Email ou mot de passe incorrect.");
  }

  localStorage.setItem(CURRENT_USER_KEY, email);
  const { password: _pw, ...safeUser } = found;
  return { token: fakeToken(email), user: safeUser };
}

export async function getProfile() {
  await wait(200);
  const email = localStorage.getItem(CURRENT_USER_KEY);
  if (!email) throw new Error("Non authentifié.");

  const found = getStoredUsers().find((u) => u.email === email);
  if (!found) throw new Error("Utilisateur introuvable.");

  const { password: _pw, ...safeUser } = found;
  return safeUser;
}

export async function updateProfile(updates) {
  await wait();
  const email = localStorage.getItem(CURRENT_USER_KEY);
  const users = getStoredUsers();
  const index = users.findIndex((u) => u.email === email);
  if (index === -1) throw new Error("Utilisateur introuvable.");

  users[index] = { ...users[index], ...updates };
  saveStoredUsers(users);

  const { password: _pw, ...safeUser } = users[index];
  return safeUser;
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

// ---------- ORDERS ----------

export async function getOrders() {
  await wait();
  return MOCK_ORDERS;
}

export async function getOrderById(id) {
  await wait(300);
  const order = MOCK_ORDERS.find((o) => o.id === id);
  if (!order) throw new Error("Commande introuvable.");
  return order;
}