var FIREFLYX;
(function (FIREFLYX) {
    /** 投影类型 */
    var projectionType;
    (function (projectionType) {
        /** 透视 */
        projectionType[projectionType["Perspective"] = 0] = "Perspective";
        /** 正交 */
        projectionType[projectionType["Orthographic"] = 1] = "Orthographic";
    })(projectionType = FIREFLYX.projectionType || (FIREFLYX.projectionType = {}));
    /** 相机 */
    var camera = /** @class */ (function () {
        function camera() {
            //远裁剪面
            this.far = 1000;
            //近裁剪面
            this.near = 0.3;
            //视口矩形 ViewPort Rect
            this.viewPortRect = new FIREFLYX.rect(0, 0, 1, 1);
            //Projection 投影模式
            this.projection = projectionType.Perspective;
            //透视投影
            //Field of View
            this.fov = 60; //角度
            //正交投影
            //正交 的视野size
            this.size = 5;
            //坐标
            this.postion = new FIREFLYX.Vector3();
            //旋转
            this.rotation = new FIREFLYX.Quaternion();
            this.m_viewMatrix = new FIREFLYX.Matrix();
            this.m_projectionMatrix = new FIREFLYX.Matrix();
        }
        //获取view 矩阵
        camera.prototype.getViewMatrix = function () {
            this.m_viewMatrix;
            return this.m_viewMatrix;
        };
        //获取投影矩阵
        camera.prototype.getProjectionMatrx = function () {
            return this.m_projectionMatrix;
        };
        return camera;
    }());
    FIREFLYX.camera = camera;
})(FIREFLYX || (FIREFLYX = {}));
//# sourceMappingURL=fireflyx.core.camera.js.map