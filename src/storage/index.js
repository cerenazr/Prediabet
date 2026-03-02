import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  USER: 'prediabet_user',
  BMI_HISTORY: 'prediabet_bmi_history',
  STEP_HISTORY: 'prediabet_step_history',
  FOOD_LOGS: 'prediabet_food_logs',
  SURVEY_RESULTS: 'prediabet_survey_results',
};

// User
export const saveUser = async (user) => {
  await AsyncStorage.setItem(KEYS.USER, JSON.stringify(user));
};

export const getUser = async () => {
  const data = await AsyncStorage.getItem(KEYS.USER);
  return data ? JSON.parse(data) : null;
};

export const clearUser = async () => {
  await AsyncStorage.removeItem(KEYS.USER);
};

// BMI
export const getBMIHistory = async () => {
  const data = await AsyncStorage.getItem(KEYS.BMI_HISTORY);
  return data ? JSON.parse(data) : [];
};

export const saveBMIRecord = async (record) => {
  const history = await getBMIHistory();
  const updated = [record, ...history];
  await AsyncStorage.setItem(KEYS.BMI_HISTORY, JSON.stringify(updated));
};

export const deleteBMIRecord = async (index) => {
  const history = await getBMIHistory();
  history.splice(index, 1);
  await AsyncStorage.setItem(KEYS.BMI_HISTORY, JSON.stringify(history));
};

// Steps
export const getStepHistory = async () => {
  const data = await AsyncStorage.getItem(KEYS.STEP_HISTORY);
  return data ? JSON.parse(data) : [];
};

export const saveStepRecord = async (record) => {
  const history = await getStepHistory();
  const updated = [record, ...history];
  await AsyncStorage.setItem(KEYS.STEP_HISTORY, JSON.stringify(updated));
};

// Food
export const getFoodLogs = async () => {
  const data = await AsyncStorage.getItem(KEYS.FOOD_LOGS);
  return data ? JSON.parse(data) : [];
};

export const saveFoodLog = async (log) => {
  const logs = await getFoodLogs();
  const updated = [log, ...logs];
  await AsyncStorage.setItem(KEYS.FOOD_LOGS, JSON.stringify(updated));
};

// Survey results
export const getSurveyResults = async () => {
  const data = await AsyncStorage.getItem(KEYS.SURVEY_RESULTS);
  return data ? JSON.parse(data) : [];
};

export const saveSurveyResult = async (result) => {
  const results = await getSurveyResults();
  const updated = [result, ...results];
  await AsyncStorage.setItem(KEYS.SURVEY_RESULTS, JSON.stringify(updated));
};
