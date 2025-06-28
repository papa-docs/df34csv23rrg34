// values.js

// Основные данные 
var fio               = "Иванов Иван Иванович";
var fio_en            = "Ivanov Ivan";
var birth             = "01.01.2000"; //дата рождения
var date_give         = "01.01.2020"; //Дата видачи
var date_out          = "01.01.2030"; // действителен до
var organ             = "Шевченковский РОВД ХО"; //орган что выдал документ
var rnokpp            = "1234567890"; //ИНН
var uznr              = "106947"; //Номер записи
var pass_number       = "008759371"; //номер паспорта

var registeredOn      = "13.05.2024"; //дата регистрации

// Прописка
var legalAdress       = "м. Киев, вул. Свободи, 14"; //Место проживание
var live              = "м. Харьков"; //Место рождение 
var bank_adress       = "м. Харьков, вул. Героїв, 123"; //Место жительства указано в банке

var sex               = "Ч";
var sex_en            = "M";

// Данные для Прав
var rights_categories = "A, B"; //Категории
var prava_number      = "AB123456"; // номер прав
var prava_date_give   = "01.01.2020"; //Дата выдачи Прав
var prava_date_out    = "01.01.2030"; //Действителен ДО
var pravaOrgan        = "ТСЦ 6345 МВС України"; //орган который выдал



var university        = "ХНУ имени Каразина"; // Університет
var fakultet          = "Физико-технический"; // Факультет
var stepen_dip        = "Магістра";
var univer_dip        = "ХНУ имени Каразина";
var dayout_dip        = "01.07.2023";
var special_dip       = "Прикладная математика";
var number_dip        = "MT-545678";
var form              = "Очная";



var zagran_number     = "FP9087236";

var student_number    = "2022154258";
var student_date_give = "01.09.2021";
var student_date_out  = "30.06.2025";



// Включение/выключение документов
var isRightsEnabled   = true;
var isStudyEnabled    = true;
var isZagranEnabled   = false;
var isDiplomaEnabled  = false;
// Добавь остальные переменные по аналогии

// Пути к нужным фото    ?timestamp=N   "photo.jpg?timestamp=N" динамически: var url = "photo.jpg?timestamp=" + N;

var photo_passport = "clients/1/owner-image.png"; //эДок, паспорт,
var photo_rights   = "clients/1/owner-image.png"; //права
var photo_students = "clients/1/photo_passport"; //диплом, студ
var photo_zagran   = "clients/1/photo_zagran.jpg"; //загран

var signPng           = "clients/1/sign.png"; //подпись
// Можно добавить еще, если надо

