module FIREFLYX {
    /** 投影类型 */
    export enum projectionType{
        /** 透视 */
        Perspective,
        /** 正交 */
        Orthographic
    }
    /** 相机 */
    export class camera{
        //远裁剪面
        far : number = 1000;
        //近裁剪面
        near : number = 0.3;
        //视口矩形 ViewPort Rect
        viewPortRect : rect = new rect(0,0,1,1);
        //Projection 投影模式
        projection : projectionType = projectionType.Perspective;
            //透视投影
                //Field of View
        fov : number = 60;  //角度
            //正交投影
                //正交 的视野size
        size : number = 5;

        //坐标
        postion : Vector3 = new Vector3();
        //旋转
        rotation : Quaternion = new Quaternion();

        private m_viewMatrix : Matrix = new Matrix();
        //获取view 矩阵
        getViewMatrix(){
            this.m_viewMatrix
            return this.m_viewMatrix;
        }

        private m_projectionMatrix : Matrix = new Matrix();
        //获取投影矩阵
        getProjectionMatrx(){
            return this.m_projectionMatrix;
        }
    }
}