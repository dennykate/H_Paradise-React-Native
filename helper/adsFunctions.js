import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : "ca-app-pub-6875308288532623/6374815350";

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ["fashion", "clothing"],
});

export const initInterstitialAds = () => {
  interstitial.addAdEventListener(AdEventType.LOADED, () => {
    interstitial.show();
  });

  interstitial.load();
};

//------------------------------------------------------------------

import {
  RewardedAd,
  RewardedAdEventType,
} from "react-native-google-mobile-ads";

const adUnitId_Reward = __DEV__
  ? TestIds.REWARDED
  : "ca-app-pub-6875308288532623/3991645854";

const rewarded = RewardedAd.createForAdRequest(adUnitId_Reward, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ["fashion", "clothing"],
});

export const initRewardAds = (dispatch) => {
  rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
    rewarded.show();
  });

  rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
    console.log(reward);
  });

  rewarded.load();
};

//-----------------------------------------------------------------

// import { RewardedInterstitialAd } from "react-native-google-mobile-ads";

// const adUnitId_Reward_Intersitial = __DEV__
//   ? TestIds.REWARDED_INTERSTITIAL
//   : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

// const rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(
//   adUnitId_Reward_Intersitial,
//   {
//     requestNonPersonalizedAdsOnly: true,
//     keywords: ["fashion", "clothing"],
//   }
// );

// export const initRewardInterstitialAds = () => {
//   rewardedInterstitial.addAdEventListener(RewardedAdEventType.LOADED, () => {
//     rewardedInterstitial.show();
//   });

//   rewardedInterstitial.addAdEventListener(
//     RewardedAdEventType.EARNED_REWARD,
//     (reward) => {
//       console.log("User earned (reward intersittial) reward of ", reward);
//     }
//   );

//   rewardedInterstitial.load();
// };
