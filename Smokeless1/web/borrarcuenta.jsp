<%-- 
    Document   : borrarcuenta
    Created on : 26/05/2021, 04:46:48 PM
    Author     : yayah
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" language="java" import="java.sql.*, java.util.*, java.text.*" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Borrar Registro</title>
    </head>
    <body>
        
        <% 
            Connection con = null;
            Statement set = null;
            ResultSet rs = null;
            String url, userName, password, driver;
            url = "jdbc:mysql://localhost/creacion";
            userName = "root";
            password = "343122";
            driver = "com.mysql.jdbc.Driver";
            
            try{
                Class.forName(driver);
                con = DriverManager.getConnection(url, userName, password);
                try{
                    String idS = String.valueOf(session.getAttribute("id")); 
                    int id = Integer.parseInt(idS);
                    
                    String q = "delete from bdcrear where id_usua = "+id;
                    System.out.println(q);
                    
                    set = con.createStatement();
                    
                    int borrar = set.executeUpdate(q);
                    
                    session.setAttribute("id", "");
                    
                    
                    %>
            <h1>Cuenta Borrado con Exito</h1>  
            
            
                    <%
                        
                    set.close();
                    
                    response.sendRedirect("index.html"); 
                
                }catch(SQLException ed){
                    System.out.println("Error al borrar el registro de la tabla");
                    System.out.println(ed.getMessage());
                    %>
            <h1>Registro No Borrado con Exito, error en el recurso, solo juguito again</h1>        
                    <%
                }
                con.close();
                
            
            }catch(Exception e){
                System.out.println("Error al conectar con la bd");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                %>
        <h1>Sitio en Construcción</h1>            
                    <%
            
            }
            %>
        
        <br>
                   <a href='index.html?id=<%=session.getAttribute("id")%>ban=<%=session.getAttribute("ban")%>' >Regresar </a>
                   
        
    </body>
</html>
