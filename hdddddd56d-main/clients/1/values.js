// values.js

// Основные данные 
var fio               = "Васильев Иван Дмитриевич";
var fio_en            = "Vasyliev lvan";
var birth             = "30.08.2004"; //дата рождения
var date_give         = "28.03.2019"; //Дата выдачи паспорта
var date_out          = "28.03.2023"; // действителен до
var organ             = "2312"; //орган что выдал документ
var rnokpp            = "3822804331"; //ИНН
var uznr              = "20040830-09130"; //Номер записи
var pass_number       = "003176428"; //номер паспорта

var registeredOn      = "15.05.2024"; //дата регистрации

// Прописка
var legalAdress       = "3anopiзькa область, 3anopiзькa район, селище Балабине, вул. Миру, буд. 119"; //Место проживание
var live              = "Cелище Балабине"; //Место рождение 
var bank_adress       = "Cелище Балабине, вул. Миру, буд. 119"; //Место жительства указано в банке

var sex               = "Ч";
var sex_en            = "M";

// Данные для Прав
var rights_categories = "A, B"; //Категории
var prava_number      = "GE657244"; // номер прав
var prava_date_give   = "17.12.2022"; //Дата выдачи Прав
var prava_date_out    = "17.12.2052"; //Действителен ДО
var pravaOrgan        = "ТСЦ 8044"; //орган который выдал



var university        = "ХНУ имени Каразина"; // Університет
var fakultet          = "Физико-технический"; // Факультет
var stepen_dip        = "Магістра";
var univer_dip        = "ХНУ имени Каразина";
var dayout_dip        = "01.07.2023";
var special_dip       = "Прикладная математика";
var number_dip        = "MT-545678";
var form              = "Очная";



var zagran_number     = "GK511812";

var student_number    = "2022154258";
var student_date_give = "01.09.2021";
var student_date_out  = "30.06.2025";



// Включение/выключение документов
var isRightsEnabled   = true;
var isStudyEnabled    = false;
var isZagranEnabled   = true;
var isDiplomaEnabled  = false;
// Добавь остальные переменные по аналогии

// Пути к нужным фото    ?timestamp=N   "photo.jpg?timestamp=N" динамически: var url = "photo.jpg?timestamp=" + N;

var photo_passport = "clients/1/1.png"; //эДок, паспорт,
var photo_rights   = "clients/1/4.png"; //права
var photo_students = "clients/1/1.png"; //диплом, студ
var photo_zagran   = "clients/1/5.png"; //загран

var signPng           = "clients/1/sign.png"; //подпись
// Можно добавить еще, если надо

