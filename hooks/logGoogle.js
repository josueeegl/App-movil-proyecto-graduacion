import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default () => {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "651270985032-1b66b5p3001h0idg3k4eo80p767h77v7.apps.googleusercontent.com",
    iosClientId:
      "651270985032-oji9fogr16k8cm0e871imolu5q37meqa.apps.googleusercontent.com",
    expoClientId:
      "651270985032-ufqaq8njjs4uafhh34c43mfefqpdj7ag.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    if (accessToken) {
      await promptAsync({ showInRecents: true });
      let userInfoResponse = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      userInfoResponse.json().then((data) => {
        setUserInfo(data);
        showUserInfo();
      });
    }
  }
  function showUserInfo() {
    if (userInfo) {
      console.log(userInfo.name);
      console.log(userInfo.email);
    }
  }
};
