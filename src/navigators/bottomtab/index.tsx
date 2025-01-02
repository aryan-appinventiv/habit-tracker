import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/home";
import Habits from "../../screens/habits";
import Add from "../../screens/add";
import Progress from "../../screens/progress";
import Settings from "../../screens/settings";
import { Image, Text, View } from "react-native";
import { images } from "../../assets/images";
import styles from "./styles";
import { colors } from "../../utils/colors";
import { vh } from "../../utils/dimensions";

type BottomTabParamList = {
    Home: undefined;
    Habits: undefined;
    Add: undefined;
    Progress: undefined;
    Settings: undefined;
  };
  
const Tab = createBottomTabNavigator<BottomTabParamList>();

const renderTabBarIcon = (iconSource:any, focused:boolean) => (
    <View style={[styles.tabBarCont, focused && { backgroundColor: colors.tabIcon }]}>
        <Image source={iconSource} style={styles.tabBarIcon} />
    </View>
);
const renderTabBarTitle = (iconTitle:string) =>(
  <Text style={styles.tabBarText}>{iconTitle}</Text>
)

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopWidth: 0,
                    height: vh(90),
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => renderTabBarIcon(images.home, focused),
                    tabBarLabel: () => renderTabBarTitle("Home"),
                }}
            />
            <Tab.Screen
                name="Habits"
                component={Habits}
                options={{
                    tabBarIcon: ({ focused }) => renderTabBarIcon(images.hobbies, focused),
                    tabBarLabel: () => renderTabBarTitle("My habits"),
                }}
            />
            <Tab.Screen
                name="Add"
                component={Add}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={images.add} style={styles.addIcon} />
                        </View>
                    ),
                    tabBarLabel: () => null,
                    tabBarStyle: { display: "none" },
                }}
            />
            <Tab.Screen
                name="Progress"
                component={Progress}
                options={{
                    tabBarIcon: ({ focused }) => renderTabBarIcon(images.progress, focused),
                    tabBarLabel: () => renderTabBarTitle("Progress"),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => renderTabBarIcon(images.settings, focused),
                    tabBarLabel: () => renderTabBarTitle("Settings"),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;
