import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import Constants from "expo-constants";
import contacts from "./contacts";
import Row from "./Row";

export default class App extends React.Component {
	state = {
		showContacts: false,
	};

	toggleContacts = () => {
		this.setState((prev) => ({ showContacts: !prev.showContacts }));
	};

	render() {
		return (
			<View style={styles.container}>
				<Button title="mostrar contactos" onPress={this.toggleContacts} />
				{this.state.showContacts && (
					<ScrollView
						style={styles.scroll}
						contentContainerStyle={styles.contentScroll}
					>
						{contacts.map((contact) => (
							<Row {...contact} />
						))}
					</ScrollView>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
	},
	scroll: {
		flex: 1,
		width: "100%",
	},
	contentScroll: {
		alignItems: "center",
	},
});
