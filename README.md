# javapro18_team_backend
Дипломный проект группы 18 Skillbox 

Основные участники со строны бэка:
<a href="https://github.com/KronCosta">KronCosta</a>
<a href="https://github.com/Folko85">Folko85</a>
<a href="https://github.com/Shkiller">Shkiller</a>
<a href="https://github.com/Brosha">Brosha</a>
<a href="https://github.com/Artemk70">Artemk70</a>

Для запуска проекта выполнить  
1. **mvn clean package** - сборка jar-файлов
2. **docker-compose up -d** - запуск проекта (Нужно дождаться загрузки проекта cloud-config) 
Для полноценного использования Графаны нужны дополнительные натройки >>
 a. Prometheus по адресу http://prometheus:9090 
 b. Loki по адресу http://loki:3100 
 c. а также импортировать панели из папки scripts/dashboard или готовым скриптом в GRAFANA  

**Технологии:**
Spring Boot, Spring Security, Spring Cloud Config, Hibernate, Liquibase,  
RabbitMQ, Redis, SocketIO, Vaadin, Junit, Grafana, Prometheus, Loki, Promtail,  
Lombok, Docker Compose, Maven  

ToDo по <a href="https://github.com/Folko85">Folko85</a>:
1. Сделать шедулер для периодической очистки сессий в редисе  
2. Убрать вторую базу mySQL (пусть данные хранятся в mongoDB)  
3. Добавить в проект кафку для обратного ответа от микросервиса  

