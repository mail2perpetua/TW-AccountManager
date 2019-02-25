// Copyright (C) 2018 eQuadriga Pty Ltd
//


var AccountManager =  {
getAccountsByType:function(type, callback)
{
	return cordova.exec(
		function(accounts) { callback(undefined, accounts) },
		callback,
		'AccountManager', 'getAccountsByType', [type]);
},

addAccountExplicitly:function(accountType, username, password, userdata, callback)
{
	return cordova.exec(
		function(account) { callback(undefined, account) },
		callback,
		'AccountManager', 'addAccountExplicitly', [accountType, username, password, userdata]);
},

clearPassword:function(account, callback)
{
	return cordova.exec(
		function() { callback(); },
		callback,
		'AccountManager', 'clearPassword', [account._index]);
},

removeAccount:function(account, callback)
{
	return cordova.exec(
		function() { callback(); },
		callback,
		'AccountManager', 'removeAccount', [account._index]);
},

setAuthToken:function(account, authTokenType, authToken, callback)
{
	return cordova.exec(
		function() { callback(); },
		callback,
		'AccountManager', 'setAuthToken', [account._index, authTokenType, authToken]);
},

peekAuthToken:function(account, authTokenType, callback)
{
	return cordova.exec(
		function(result) { callback(undefined, result.value); },
		callback,
		'AccountManager', 'peekAuthToken', [account._index, authTokenType]);
},

getAuthToken:function(account, authTokenType, notifyAuthFailure, callback)
{
	return cordova.exec(
		function(result) { callback(undefined, result.value); },
		callback,
		'AccountManager', 'getAuthToken', [account._index, authTokenType, notifyAuthFailure]);
},

setPassword:function(account, password, callback)
{
	return cordova.exec(
		function() { callback(); },
		callback,
		'AccountManager', 'setPassword', [account._index, password]);
},

getPassword:function(account, callback)
{
	return cordova.exec(
		function(result) { callback(undefined, result.value); },
		callback,
		'AccountManager', 'getPassword', [account._index]);
},

setUserData:function(account, key, value, callback)
{
	return cordova.exec(
		function() { callback(); },
		callback,
		'AccountManager', 'setUserData', [account._index, key, value]);
},

getUserData:function(account, key, callback)
{
	return cordova.exec(
		function(result) { callback(undefined, result.value); },
		callback,
		'AccountManager', 'getUserData', [account._index, key]);
}
};

module.exports = AccountManager;
