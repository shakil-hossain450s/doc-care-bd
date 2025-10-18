const getDoctorsFromStorage = key => {
  try {
    const getStoredId = localStorage.getItem(key);
    return getStoredId ? JSON.parse(getStoredId) : [];
  } catch (err) {
    console.log(`Error Reading Storage: ${err}`);
    return [];
  }
}

const saveToLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
}

const addDoctorsToStorage = (key, id) => {
  const storedDoctorsIds = getDoctorsFromStorage(key);
  const isExist = storedDoctorsIds.find(doctorId => doctorId === id);

  if (!isExist) {
    const newDoctorsId = [...storedDoctorsIds, id];
    saveToLocalStorage(key, newDoctorsId);
    return true;
  } else {
    return false;
  }
}

const removeFromStorage = (key, doctorId) => {
  try {
    const getIds = getDoctorsFromStorage(key);
    const remainingIds = getIds.filter(id => id !== doctorId);
    saveToLocalStorage(key, remainingIds);
    return true;
  } catch(err){
    console.log(err);
    return false;
  }

}

export { getDoctorsFromStorage, addDoctorsToStorage, removeFromStorage };