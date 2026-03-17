<?php 
class UsuarioPDO{
    

    public static function cambiarNombre($nombre){
        $sql = <<<SQL
            UPDATE Usuario SET
                nombre=$nombre
            WHERE Id = 1
        SQL;
        DBPDO::ejecutaConsulta($sql);
    }
     

}
?>