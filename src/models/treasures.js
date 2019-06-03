import connection from '../../db/connection';

const fetchTreasures = async () => await connection.select('*').from('treasures').limit(5);

const fetchTreasuresByShopID = async (id) => await connection.select('*').from('treasures').where({ shop_id: id }).returning('*');


export { fetchTreasures, fetchTreasuresByShopID }