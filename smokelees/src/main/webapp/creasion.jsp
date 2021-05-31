<%-- 
    Document   : creasion
    Created on : 24/05/2021, 05:42:00 PM
    Author     : yayah
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" language="java" import="java.sql.*, java.util.*, java.text.*" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registro de Usuarios</title>
    </head>
    <body>
        <%
            //aqui va codigo java
            Connection con = null;
            Statement set = null;
            ResultSet rs = null;

            String url, userName, password, driver;

            url = "jdbc:mysql://localhost/creacion";
            userName = "root";
            password = "343122";
            driver = "com.mysql.jdbc.Driver";
            //voy a lanzar una vista para cuando hace la insercion, cuando 
            //hay error en la lectura de la tabla
            //hay error por parte de bd

            try {
                Class.forName(driver);
                con = DriverManager.getConnection(url, userName, password);

                try {
                    String nombres, contrasenas, q;
                    nombres = request.getParameter("name");
                    contrasenas = request.getParameter("contra");

                    set = con.createStatement();

                    q = "insert into bdcrear(nombre,contrasena) "
                            + "values ('" + nombres + "', '" + contrasenas + "')";
                    int correo1 = set.executeUpdate(q);

        %>
        <h1>Registro Exitoso</h1>            
        <%                    } catch (SQLException ed) {
            System.out.println("Error al registrar en la tabla");
            System.out.println(ed.getMessage());
        %>
        <h1>Registro No Exitoso, error en la lectura de la tabla</h1>            
        <%
            }
            con.close();

        } catch (Exception e) {
            System.out.println("Error al conectar la bd");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());

        %>

        <h1>Sitio en Construcción</h1>            
        <%                        }
        %>


        <a href="index.html" >Regresar al menú principal</a>

    </body>
</html>