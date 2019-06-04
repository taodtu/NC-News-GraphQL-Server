import connection from '../../db/connection';
import { fetchTreasuresByShopID } from './articles'

const fetchShops = async () => await connection.select('*').from('shops').limit(5);

const fetchOwnerByShopID = async (id) => {
 const shop_owner = await connection.select('forename').from('owners').where({ owner_id: id });
 return shop_owner[0].forename;
};

const fetchStockValue = async (id) => {
 const treasures = await fetchTreasuresByShopID(id);
 const stock_value = treasures.reduce((acc, cur) => acc += (+cur['cost_at_auction']), 0);
 return stock_value;
};

const fetchShopsByOwnerID = async (id) => await connection.select('*').from('shops').where({ owner_id: id }).returning('*');

const fetchShopCount = async (id) => {
 const shops = await fetchShopsByOwnerID(id);
 return shops.length;
};

const fetchShopsStockValue = async (id) => {
 const shops = await fetchShopsByOwnerID(id);
 const res = await Promise.all(shops.map(async (shop) => await fetchStockValue(shop.shop_id)
 ));
 return res.reduce((acc, cur) => acc += cur, 0)
};

export { fetchShops, fetchOwnerByShopID, fetchStockValue, fetchShopsByOwnerID, fetchShopCount, fetchShopsStockValue }