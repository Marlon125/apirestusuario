import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/db_config';

interface UserAttributes {
    id: number
    nombre: string
    correo: string
    estado: boolean
}

interface UserCreationAttributes extends Optional<UserAttributes, "id">{}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {}

const Usuario = db.define<UserInstance>('usuarios', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    freezeTableName: true,
    timestamps: false
});

export default Usuario;
