import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { Text, View, TouchableOpacity } from "react-native";

import { api } from "../src/lib/api";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useRouter } from "expo-router";

import NLWLogo from "../src/assets/nlw-spaceTime-logo.svg";

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/50d255ecc40b316799aa",
};

export default function App() {
  const router = useRouter();

  const [response, signWithGithub] = useAuthRequest(
    {
      clientId: "50d255ecc40b316799aa",
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "nlwspacetime",
      }),
    },
    discovery
  );

  async function handleGithubOAuthCode(code: string) {
    const response = await api
      .post("/register", {
        code,
      })
      
    const { token } = response.data;

    await SecureStore.setItemAsync("token", token);

    router.push('/memories');
  }

  useEffect(() => {
    // usa para ver se está retornando a url correta (url)
    // console.log(
    //   makeRedirectUri({
    //     scheme: 'nlwspacetime',
    //   }),
    // )

    // console.log(response)

    if ((response?.type) === "success") {
      const { code } = response.params;

      handleGithubOAuthCode(code);
    }
  }, [response]);

  return (
    <View className="flex-1 items-center px-8 py-10">

      <View className="flex-1 items-center justify-center">
        <NLWLogo />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            {" "}
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
          onPress={() => signWithGithub()}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembranças
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>

    </View>
  );
}
