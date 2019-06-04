import connection from '../../db/connection';

const fetchOwners = async () => await connection.select('*').from('owners').limit(100);

const fetchOwnerByID = async (id) => await connection.select('*').from('owners').where({ owner_id: id }).returning('*');

export { fetchOwners, fetchOwnerByID }


