import "react-native-gesture-handler";
import { View, Text, Image, ScrollView } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";

import User from "./assets/LogoIngrid.jpeg";

import Backups from "./screens/Backups";
import Categories from "./screens/Categories";
import Contact from "./screens/Contact";
import Customize from "./screens/Customize";
import GetPremium from "./screens/GetPremium";
import Home from "./screens/Home";
import RateApp from "./screens/RateApp";
import Settings from "./screens/Settings";
import Timer from "./screens/Timer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                  }}
                >
                  <Image
                    source={User}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#C8A787"
                    }}
                  >Ingrid Loyola</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#111"
                    }}
                  >ID: 111</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#c8a787",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#0C765E"
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <Entypo
              name="home"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={Home}
        />
        
        <Drawer.Screen
          name="Mensagens"
          options={{
            drawerLabel: "Mensagens",
            title: "Mensagens",
            drawerIcon: () => (
              <Entypo
              name="message"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={Timer}
        />
        <Drawer.Screen
          name="Inventario"
          options={{
            drawerLabel: "Meu Inventario",
            title: "Meu Inventario",
            drawerIcon: () => (
              
              <Entypo
              name="box"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={Categories}
        />
        <Drawer.Screen
          name="vendas"
          options={{
            drawerLabel: "Minhas Vendas",
            title: "Minhas Vendas",
            drawerIcon: () => (
              <Entypo
              name="credit"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={Customize}
        />
        <Drawer.Screen
          name="HistoticoDeVendas"
          options={{
            drawerLabel: "Historico de Vendas",
            title: "Historico de Vendas",
            drawerIcon: () => (
              <Entypo
              name="back-in-time"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={Settings}
        />

        <Drawer.Screen
          name="conferencia"
          options={{
            drawerLabel: "Conferência",
            title: "Conferência",
            drawerIcon: () => (
              <Entypo
              name="text-document-inverted"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={Backups}
        />

        {/* <Drawer.Screen
          name="missao"
          options={{
            drawerLabel: "Missão",
            title: "Missão",
            drawerIcon: () => (
              <Feather
              name="target"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={GetPremium}
        /> */}
        <Drawer.Screen
          name="MeusClientes"
          options={{
            drawerLabel: "Meus Clientes",
            title: "Meus Clientes",
            drawerIcon: () => (
              <Entypo
              name="users"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={RateApp}
        />

        <Drawer.Screen
          name="garantia"
          options={{
            drawerLabel: "garantia",
            title: "garantia",
            drawerIcon: () => (
              <Feather
              name="tool"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={Contact}
        />
        <Drawer.Screen
          name="Assistencia"
          options={{
            drawerLabel: "Assistência",
            title: "Assistência",
            drawerIcon: () => (
              <Entypo
              name="shield"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={Contact}
        />
        <Drawer.Screen
          name="telefone"
          options={{
            drawerLabel: "Telefone",
            title: "Telefone",
            drawerIcon: () => (
              <Entypo
              name="phone"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={Contact}
        />
        <Drawer.Screen
          name="minhaConta"
          options={{
            drawerLabel: "Minha Conta",
            title: "Minha Conta",
            drawerIcon: () => (
              <Entypo
              name="user"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={Contact}
        />
        <Drawer.Screen
          name="sair"
          options={{
            drawerLabel: "Sair",
            title: "Sair",
            drawerIcon: () => (
              <Entypo
              name="log-out"
              size={20}
              color={'#0C765E'}
            />
            )
          }}
          component={Contact}
        />
        
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
