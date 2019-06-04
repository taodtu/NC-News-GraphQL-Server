import { fetchOwners, fetchOwnerByID } from '../models/topics';
import { fetchShops, fetchShopsByOwnerID, fetchOwnerByShopID, fetchStockValue, fetchShopCount, fetchShopsStockValue } from '../models/shops';
import { fetchTreasures, fetchTreasuresByShopID } from '../models/articles';
export default {
 Query: {
  owners: () => fetchOwners(),
  shops: () => fetchShops(),
  treasures: () => fetchTreasures(),
  owner: (parent, { owner_id }) => fetchOwnerByID(owner_id),
 },
 Shop: {
  treasures: parent => fetchTreasuresByShopID(parent.shop_id),
  shop_owner: parent => fetchOwnerByShopID(parent.owner_id),
  stock_value: parent => fetchStockValue(parent.shop_id)
 },
 Owner: {
  shops: parent => fetchShopsByOwnerID(parent.owner_id),
  shop_count: parent => fetchShopCount(parent.owner_id),
  stock_value: parent => fetchShopsStockValue(parent.owner_id)
 }
}