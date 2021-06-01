<%-- 
    Document   : actualizardatos
    Created on : 26/05/2021, 01:17:01 AM
    Author     : yayah
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" language="java" import="java.sql.*, java.util.*, java.text.*" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Consulta de Cuentas</title>
    </head>
    <body>
        <h1>Datos De Usuario</h1>
        <br>
        
            
            <tbody>
                
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
                            String q = "select nombre, nacimiento,sexo ,eda from bdcrear WHERE id_usua='"+session.getAttribute("id")+"'";;
                            
                            System.out.println(q);
                            
                            set = con.createStatement();
                            rs = set.executeQuery(q);
                            while(rs.next()){
                            
                %>
                 <form method="post" name="formularioregistro" action="actuuarios.jsp">
                    <br> 
                    <input type="text" value="<%=rs.getString("nombre") %>" name="name"  > 
                    <input type="text" value="<%=rs.getString("nacimiento")%> " name="naci">
                    <input type="text" value="<%=rs.getString("sexo")%> " name="sexo"> 
                    <input type="text" value="<%=rs.getString("eda")%> " name="edad"> 
                   
                    <button  class="btn btn-info btn-block compra_boton-color" >Actualizar</button>
                    <a href="borrarcuenta.jsp">Eliminar mi cuenta</a>
                 
                 </form>

                <%     
                                
                            }
                            rs.close();
                            set.close();
                        String idS = String.valueOf(session.getAttribute("id")); 
                        if(idS!=null)
                        {
                        response.sendRedirect("menuinicial.html"); 
                        }
                        else
                        {
                            response.sendRedirect("login.html"); 
                        }
                            
                        
                        }catch(SQLException ed){
                            System.out.println("Error al consultar la tabla");
                            System.out.println(ed.getMessage());
                            %>
            </body>
            <h1>Recurso no disponible solo juguito contigo UwU</h1>
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
                
            </body>
        </table>
                    <br>
                  <a href='index.html?id=<%=session.getAttribute("id")%>ban=<%=session.getAttribute("ban")%>' >Regresar </a>
                   
    </body>
</html>