declare module FIREFLYX {
    /** 投影类型 */
    enum projectionType {
        /** 透视 */
        Perspective = 0,
        /** 正交 */
        Orthographic = 1
    }
    /** 相机 */
    class camera {
        far: number;
        near: number;
        viewPortRect: rect;
        projection: projectionType;
        fov: number;
        size: number;
        postion: Vector3;
        rotation: Quaternion;
        private m_viewMatrix;
        getViewMatrix(): Matrix;
        private m_projectionMatrix;
        getProjectionMatrx(): Matrix;
    }
}
