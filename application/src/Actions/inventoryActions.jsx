import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const REMOVE_INV_ITEM = 'REMOVE_INV_ITEM';
export const ADD_INV_TO_SHOP = 'ADD_INV_TO_SHOP'
export const EDIT_INV_ITEM = 'EDIT_INV_ITEM';
export const ADD_INV_ITEM = 'ADD_INV_ITEM';

/* ------------- ACTION CREATORS ------------- */
export function removeInventoryItem(user, item) {
	const EANcode = item.EANcode

	//remove item
	databaseRef.ref('users/' + user + '/inventory').child(EANcode).remove();

	// add to trash
	databaseRef.ref('users/' + user + '/trash').child(EANcode).set(item)


	return dispatch => {

		//get new copy of inventory
		var firebaseCall = databaseRef.ref("users/" + user)

		firebaseCall.once('value', snapshot => {
			snapshot.forEach(childSnap => {
				var item = childSnap.val();
				if (item === "inventory") {
					dispatch({
						type: REMOVE_INV_ITEM,
						payload: {
							inventory: item
						}
					})
				}
			})
		});
	}
}

export function addInvToShopping(user, item) {
	const EANcode = item.EANcode

	// add to shopping
	databaseRef.ref('users/' + user + '/shopping').child(EANcode).set(item)

	return dispatch => {

		//get new copy of inventory
		var firebaseCall = databaseRef.ref("users/" + user)

		firebaseCall.once('value', snapshot => {
			snapshot.forEach(childSnap => {
				var item = childSnap.val();
				if (item === "shopping") {
					dispatch({
						type: ADD_INV_TO_SHOP,
						payload: {
							shopping: item
						}
					})
				}
			})
		});
	}
}


export const editItem = (item) => ({
	type: EDIT_INV_ITEM,
	payload: "CHANGE SCREEN TO ITEMSCREEN"
});

export const addItem = () => ({
	type: ADD_INV_ITEM,
	payload: "CHANGE SCREEN TO ITEMSCREEN"
});