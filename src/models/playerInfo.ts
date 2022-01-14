export interface playerInfo {
  specatorIndex: number;
  name: string;
  clan: string;
  team: number;
  leftWeapon: {
    imageSource: string;
    weaponName: string;
  };
  rightWeapon: {
    imageSource: string;
    weaponName: string;
  };
  health: number;
  dash: number;
  isDead: boolean;

  deads: number;
  kills: number;
  score: number;
  ping: number;
}

export default playerInfo;
