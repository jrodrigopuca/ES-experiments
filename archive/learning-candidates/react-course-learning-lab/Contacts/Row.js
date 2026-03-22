import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const Row = (props) => (
	<View key={props.key} style={styles.item}>
		<Text>{props.name}</Text>
		<Text>{props.phone}</Text>
	</View>
);

const styles = StyleSheet.create({
	item: {
		flexDirection: "column",
		alignItems: "center",
		padding: 5,
		margin: 5,
	},
});

Row.propTypes = {
	key: PropTypes.string,
	name: PropTypes.string,
	phone: PropTypes.string,
};

export default Row;
