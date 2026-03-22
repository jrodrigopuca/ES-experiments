## Sequelize
Es un ORM (Object-Relational Mapping), transforma las tablas de la bd en una serie de entidades, creando una capa nueva entre la aplicación y la persistencia.

Sequelize es un ORM basado en promesas para Postgres/MySQL/SQLite/MSSQL y esta totalmente escrita en JS.

Simplifican el acceso de datos:
```
    "SELECT * FROM Users WHERE id=4"

    Users.find(4)
        .then(user=>{})
        .catch(err=>{})
```


## Instalación
se puede realizar por medio de npm o yarn

```
yarn add sequelize

yarn add pg pg-hstore
yarn add mysql //para mysql y mariadb
yarn add mysql2 //para mysql
yarn add sqlite3
yarn add tedious //para mssql
```

## Conexión

```
    const dbConfig={
        username: "root",
        password: "",
        database: "miDB",
        host: "localhost"
    }

    const sequelize = new Sequelize(
            dbConfig.database, 
            dbConfig.username, 
            dbConfig.password,
            {
                host: dbConfig.host, 
                dialect:'mysql'
            })
```

## Modelos
Representación en la BD:
Users
- id: int
- username: varchar(255)
- name: varchar(255)
- lastname: varchar(255)
- email: varchar(255)
- password: varchar(255)
- lastLogin: date
- logged: bool
- createdAt:date
- updatedAt: date

Equivalente del mapeo:
```
module.exports = (sequelize, DataTypes)=>{
    const User= sequelize.define('User',{
        username: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        lastLogin: DataTypes.DATE,
        logged: DataTypes.BOOLEAN,
        lastPassword: DataTypes.STRING
    },{})

    return User;
}
```

### Columnas
Para cada columna se puede agregar distintas opciones:
```
// permitir nulos
    titulo: {type:DataTypes.STRING, allowNull:false}
// valor por defecto
    titulo: {type:DataTypes.STRING, defaultValue:true}
// valor único
    titulo: {type:DataTypes.STRING, unique:true}
// PK
    id: {type:DataTypes.INTEGER, primaryKey:true}
// autoIncremental
    id: {type:DataTypes.INTEGER, autoIncrement:true}
// Comentario (solo para MySQL y Postgres)
    titulo: {type:DataTypes.STRING, comment:"Comentario salvaje"}
```
### Tipos de Datos
```
STRING(N)           //VARCHAR
TEXT
INTEGER
FLOAT(N,M)
DECIMAL(N,M)
DATE                //DATETIME - TIMESTAMP
BOOLEAN             //TINYINT
ENUM(N,M)           
UUID
```

## Asociación
Se puede asociar entre múltiples modulos.

Uno a Uno
Conectar una fuente con un único objetivos 
```
Account.hasOne(User) // Una cuenta tiene un usuario

User.belongTo(Account) // Traer el usuario perteneciente a la cuenta
```

Uno a Muchos
Conectar una fuente con múltiples objetivos 
```
User.hasMany(Product) // Un usuario tiene muchos productos

Product.belongTo(User) // Traer los productos del Usuario
```

Muchos a Muchos
Conectar múltiples recursos con múltiples objetivos, 
para realizarlo además se deberá crear un nuevo modelo (para este caso ProductUsers)
```
User.hasMany(Product) // Un usuario tiene muchos productos
Product.hasMany(User) // Un producto tiene muchos usuarios
```
En caso de que exista una tabla intermedia:
```
User.hasMany(Product,{through:'pux'}) // Un usuario tiene muchos productos
Product.hasMany(User,{through:'pux'}) // Un producto tiene muchos usuarios
```

## Consultas
Find: Búsqueda de elementos

```
//Buscar por id
Product.find(123).then((product)=>{});

//Buscar por atributo
Product.find({
    where:{name:'Switch'}
}).then((product)=>{})

//Buscar por atributo y traer solo algunos atributos
Product.find({
    where:{name:'Switch'},
    attributes:['id','title']
}).then((product)=>{})

```

FindOrCreate: Revisa si un elemento existe y sino lo crea.
```
Product.findOrCreate(
    {name:'Router'},
    {name:'Modem'}
    ).then((product)=>{})
```

FindAndCountAll: retorna un objeto con la cantidad y un array con los elementos encontrados
```
Product.findAndCountAll({
    where:{name:{[Op.ilike]:`%${query}%`}}
}).then((resultado)=>{})
```

FindAll: Busca múltiples elementos en la db
```
Product.findAll().then((productos)=>{}) //para traer todos

Product.findAll({
    attributes: ['id','name'],
    where:{
        color:'green'
    },
    limit:5
}).then(product=>{})

```

