import React from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import Constants from "expo-constants";
import contacts, { compareNames } from "./contacts";
import Row from "./Row";

export default class App extends React.Component {
	state = {
		showContacts: false,
		contacts: contacts,
	};

	toggleContacts = () => {
		this.setState((prev) => ({ showContacts: !prev.showContacts }));
	};

	//utilizo 'item' porque es lo que obtengo del flatlist
	renderItem = (obj) => <Row {...obj.item} />;
	//otra forma es usar:  renderItem = ({item}) => <Row {...item}/>

	sort = () => {
		this.setState((prev) => ({
			contacts: [...prev.contacts].sort(compareNames),
		}));
		console.log(this.state.contacts);
	};

	render() {
		return (
			<View style={styles.container}>
				<Button title="mostrar contactos" onPress={this.toggleContacts} />
				<Button title="ordenar" onPress={this.sort} />
				{this.state.showContacts && (
					<FlatList data={this.state.contacts} renderItem={this.renderItem} />
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
