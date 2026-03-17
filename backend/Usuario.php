<?php 
class Usuario{
    private $id;
    private $nombre;

    public function __construct($id,$nombre) {
        $this->nombre =$nombre;
        $this->id =$id;
    }

}
?>