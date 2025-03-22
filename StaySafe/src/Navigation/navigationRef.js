import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

let ready = false;

export const isNavigationReady = (value) => {
  ready = value;
};

export function navigate(name, params) {
  if (ready && navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}