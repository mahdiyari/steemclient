sc2.init({
	app: 'steem.app',
	callbackURL: 'https://steemclient.com/callback.php',
	scope: ['login','vote','comment','comment_delete','comment_options','custom_json','claim_reward_balance']
});

function login(){
	var loginurl = sc2.getLoginURL();
	window.location.href = loginurl;
}
// function islogin(callback){
	// sc2.me(function (err, result) {
		// if(!err && result){
			// user = result.account;
			// metadata = JSON.stringify(result.user_metadata, null, 2);
		// }
	// });
// }
function upvote(voter, author, permlink, weight,callback){
	sc2.vote(voter, author, permlink, weight, function (err, result) {
		if(!err && result){
			callback(1);
		}else{
			callback(err);
		}
	});
}
function comment(parentAuthor, parentPermlink, author, body, callback){
	var permlink = steem.formatter.commentPermlink(parentAuthor, parentPermlink);
	var title ='';
	var jsonMetadata ='';
	sc2.comment(parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
		if(!err && result){
			callback(1);
		}else{
			callback(err);
		}
	});
}
function post(parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, callback){
	sc2.comment(parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
		if(!err && result){
			callback(1);
		}else{
			callback(err);
		}
	});
}
function logout(callback){
	sc2.revokeToken(function (err, result) {
		if(!err && result){
			callback(1);
		}else{
			callback(err);
		}
	});
}
function reblog(account, author, permlink, callback){
	sc2.reblog(account, author, permlink, function (err, result) {
		if(!err && result){
			callback(1);
		}else{
			callback(err);
		}
	});
}
function follow(follower, following, callback){
	sc2.follow(follower, following, function (err, result) {
		if(!err && result){
			callback(1);
		}else{
			callback(err);
		}
	});
}
function unfollow(unfollower, unfollowing, callback){
	sc2.unfollow(unfollower, unfollowing, function (err, result) {
		if(!err && result){
			callback(1);
		}else{
			callback(err);
		}
	});
}
function ignore(follower, following, callback){
	sc2.ignore(follower, following, function (err, result) {
		if(!err && result){
			callback(1);
		}else{
			callback(err);
		}
	});
}
function claimreward(account, rewardSteem, rewardSbd, rewardVests, callback){
	sc2.claimRewardBalance(account, rewardSteem, rewardSbd, rewardVests, function (err, result) {
		if(!err && result){
			callback(1);
		}else{
			callback(err);
		}
	});
}
function metadata(metadata, callback){
	sc2.updateUserMetadata(metadata, function (err, result) {
		if(!err && result){
			callback(1);
		}else{
			callback(err);
		}
	});
}
